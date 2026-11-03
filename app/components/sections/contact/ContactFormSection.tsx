'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { trackEvent } from '@/app/analytics';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const FALLBACK_EMAIL = 'info@softwareatscale.com.au';

type Status = 'idle' | 'sending' | 'sent' | 'error';

interface ContactFormSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  labelColor: string;
  buttonColor: string;
  buttonTextColor: string;
  checkboxTextColor: string;
  placeholderColor: string;
}

export default function ContactFormSection({
  title, description, imageSrc, backgroundColor, titleColor, textColor, labelColor, buttonColor, buttonTextColor, checkboxTextColor, placeholderColor,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<Status>('idle');
  const formStarted = useRef(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!formStarted.current && name !== 'website') {
      formStarted.current = true;
      trackEvent('enquiry_form_start');
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(response.ok ? 'sent' : 'error');
      // Only a 200 from the server counts as delivered; the spam trap also gets a 200 but sends nothing
      if (!response.ok) trackEvent('enquiry_failed', { error_type: `http_${response.status}` });
      else if (!formData.website) trackEvent('enquiry_delivered');
    } catch {
      setStatus('error');
      trackEvent('enquiry_failed', { error_type: 'network' });
    }
  };

  return (
    <section id="contact-form" className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-stretch w-full">

            {/* Image: slides from left */}
            <motion.div
              className="relative w-full md:w-1/2 h-[335px] md:h-auto rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.65, ease }}
            >
              <Image src={imageSrc} alt={title} fill className="object-cover scale-225" />
            </motion.div>

            {/* Form: slides from right */}
            <motion.div
              className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
            >
              <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                    {title}
                  </h2>
                  <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>{description}</p>
                </div>
              </div>

              {status === 'sent' ? (
                <div role="status" className={`flex flex-col gap-2 w-full rounded-xl border border-[#14d3f3] p-6 ${textColor}`}>
                  <p className="font-bold text-[20px] leading-[1.4]">Thanks, your message has been sent.</p>
                  <p className="text-base leading-[1.5]">We&apos;ll be in touch within one business day.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start w-full">
                {(['name', 'email'] as const).map((field, i) => (
                  <motion.div
                    key={field}
                    className="flex flex-col gap-2 items-start w-full"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
                  >
                    <label htmlFor={`contact-${field}`} className={`font-normal text-base leading-[1.5] w-full ${labelColor}`}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      id={`contact-${field}`}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      autoComplete={field}
                      maxLength={field === 'email' ? 254 : 200}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="bg-black/5 border border-black/15 rounded-xl px-3 py-2 w-full text-base leading-[1.5] text-white focus:outline-none focus:ring-2 focus:ring-[#14d3f3] transition-shadow"
                      required
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col gap-2 items-start w-full"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.26, ease }}
                >
                  <label htmlFor="contact-message" className={`font-normal text-base leading-[1.5] w-full ${labelColor}`}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className={`bg-black/5 border border-black/15 rounded-xl p-3 w-full h-[180px] text-base leading-[1.5] text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#14d3f3] transition-shadow placeholder:${placeholderColor}`}
                    required
                  />
                </motion.div>
                {/* Spam trap: hidden from people and screen readers, bots fill it in */}
                <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <p className={`text-sm leading-[1.5] ${textColor}`}>
                  We&apos;ll only use your details to reply to your enquiry. See our{' '}
                  <Link href="/privacy-policy" className="underline">privacy policy</Link>.
                </p>
                <div role="status" aria-live="polite" className="w-full empty:hidden">
                  {status === 'error' && (
                    <p className={`text-base leading-[1.5] rounded-xl bg-black/20 p-3 ${textColor}`}>
                      Sorry, your message didn&apos;t go through. Please try again, or email us at{' '}
                      <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">{FALLBACK_EMAIL}</a>.
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`${buttonColor} border border-[#14d3f3] rounded-xl px-6 py-2.5 font-medium text-base leading-[1.5] ${buttonTextColor} hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-wait`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.34, ease }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                </motion.button>
              </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
