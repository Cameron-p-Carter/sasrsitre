'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { trackEvent } from '@/app/analytics';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const FALLBACK_EMAIL = 'info@softwareatscale.com.au';

// Moves keyboard and screen-reader users to the confirmation, as the form they were in has gone
const focusOnMount = (el: HTMLDivElement | null) => el?.focus();

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
  const formRef = useRef<HTMLFormElement>(null);
  // The thank-you message takes the form's height, so the page doesn't jump when it appears
  const [formHeight, setFormHeight] = useState<number>();
  const reduceMotion = useReducedMotion();

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
    setFormHeight(formRef.current?.offsetHeight);
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

            <div className="relative w-full md:w-1/2 h-[335px] md:h-auto rounded-2xl overflow-hidden">
              <Image src={imageSrc} alt={title} fill className="object-cover scale-225" />
            </div>

            <div className="flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2">
              <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                    {title}
                  </h2>
                  <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>{description}</p>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  ref={focusOnMount}
                  tabIndex={-1}
                  role="status"
                  className={`flex flex-col gap-3 items-center justify-center text-center w-full rounded-xl border border-[#14d3f3] p-6 outline-none ${textColor}`}
                  style={{ minHeight: formHeight }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <svg viewBox="0 0 52 52" width="48" height="48" aria-hidden="true" className="text-[#14d3f3]">
                    <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
                    <motion.path
                      d="M15 27l7 7 15-15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: reduceMotion ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.45, delay: 0.2, ease }}
                    />
                  </svg>
                  <p className="font-bold text-[20px] leading-[1.4]">Thanks, your message has been sent.</p>
                  <p className="text-base leading-[1.5]">We&apos;ll be in touch within one business day.</p>
                </motion.div>
              ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start w-full"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {(['name', 'email'] as const).map((field) => (
                  <div key={field} className="flex flex-col gap-2 items-start w-full">
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
                  </div>
                ))}
                <div className="flex flex-col gap-2 items-start w-full">
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
                </div>
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
                <button type="submit" disabled={status === 'sending'} className={`${buttonColor} border border-[#14d3f3] rounded-xl px-6 py-2.5 font-medium text-base leading-[1.5] ${buttonTextColor} hover:opacity-90 press inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-wait`}>
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                  {status === 'sending' && (
                    <span aria-hidden="true" className="w-4 h-4 rounded-full border-2 border-current border-r-transparent motion-safe:animate-spin motion-reduce:hidden" />
                  )}
                </button>
              </motion.form>
              )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
