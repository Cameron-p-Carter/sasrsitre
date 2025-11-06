import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import ContactInfoSection from '@/app/components/ContactInfoSection';
import ContactFormSection from '@/app/components/ContactFormSection';
import FAQSection from '@/app/components/FAQSection';

const CONTACT_INFO_DATA = {
  contactItems: [
    {
      iconSrc: "/images/icons/mail.svg",
      title: "Email",
      description: "Reach us anytime at our support email.",
      contactInfo: "info@softwareatscale.com",
      isLink: true
    },
    {
      iconSrc: "/images/icons/location_on.svg",
      title: "Office",
      description: "Call us for direct support and inquiries.",
      contactInfo: "Level 57, 25 Martin Place, Sydney 2000 NSW Australia",
      isLink: false
    }
  ],
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#00050a]",
  textColor: "text-[#00050a]",
  linkColor: "text-[#00050a]"
};

const CONTACT_FORM_DATA = {
  title: "Contact us",
  description: "Explore our global office locations below.",
  imageSrc: "/images/placeholder/placeholder90.jpg",
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  textColor: "text-white",
  labelColor: "text-white",
  buttonColor: "bg-[#14d3f3]",
  buttonTextColor: "text-[#0c2080]",
  checkboxTextColor: "text-[#14d3f3]",
  placeholderColor: "text-white/60"
};

const FAQ_DATA = {
  title: "FAQs",
  description: "Find answers to common questions about our services and how we can assist you.",
  faqItems: [
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including cloud engineering, security architecture, and project acceleration. Our goal is to help businesses modernize their technology stack effectively. Each service is tailored to meet the unique needs of our clients."
    },
    {
      question: "How can I get started?",
      answer: "Getting started is easy! Simply reach out through our contact form or send us an email. Our team will guide you through the process and discuss your specific needs."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including financial services, media, and insurance. Our expertise in highly regulated sectors ensures compliance and efficiency. We adapt our solutions to fit the unique challenges of each industry."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we provide ongoing support for all our services. Our dedicated support team is available to assist you with any issues or questions. We believe in building long-term relationships with our clients."
    },
    {
      question: "Can I schedule a consultation?",
      answer: "Absolutely! We encourage you to schedule a consultation to discuss your needs. You can book an appointment through our website or contact us directly. We look forward to connecting with you."
    }
  ],
  ctaTitle: "Still have questions?",
  ctaDescription: "We're here to help you!",
  ctaButtonText: "Contact",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  questionColor: "text-[#00050a]",
  answerColor: "text-[#00050a]",
  ctaTitleColor: "text-[#00050a]",
  ctaTextColor: "text-[#00050a]",
  buttonBorderColor: "border-[#0c2080]",
  buttonTextColor: "text-[#0c2080]"
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc="/images/placeholder/101.jpg"
          tagline="Connect"
          title="Get in"
          titleHighlight="Touch"
          description="We're here to assist you with any inquiries or support you may need."
          overlayOpacity={0.6}
        />
        
        <ContactInfoSection
          contactItems={CONTACT_INFO_DATA.contactItems}
          backgroundColor={CONTACT_INFO_DATA.backgroundColor}
          titleColor={CONTACT_INFO_DATA.titleColor}
          textColor={CONTACT_INFO_DATA.textColor}
          linkColor={CONTACT_INFO_DATA.linkColor}
        />
      
        <ContactFormSection
          title={CONTACT_FORM_DATA.title}
          description={CONTACT_FORM_DATA.description}
          imageSrc={CONTACT_FORM_DATA.imageSrc}
          backgroundColor={CONTACT_FORM_DATA.backgroundColor}
          titleColor={CONTACT_FORM_DATA.titleColor}
          textColor={CONTACT_FORM_DATA.textColor}
          labelColor={CONTACT_FORM_DATA.labelColor}
          buttonColor={CONTACT_FORM_DATA.buttonColor}
          buttonTextColor={CONTACT_FORM_DATA.buttonTextColor}
          checkboxTextColor={CONTACT_FORM_DATA.checkboxTextColor}
          placeholderColor={CONTACT_FORM_DATA.placeholderColor}
        />
        
        <FAQSection
          title={FAQ_DATA.title}
          description={FAQ_DATA.description}
          faqItems={FAQ_DATA.faqItems}
          ctaTitle={FAQ_DATA.ctaTitle}
          ctaDescription={FAQ_DATA.ctaDescription}
          ctaButtonText={FAQ_DATA.ctaButtonText}
          backgroundColor={FAQ_DATA.backgroundColor}
          titleColor={FAQ_DATA.titleColor}
          textColor={FAQ_DATA.textColor}
          questionColor={FAQ_DATA.questionColor}
          answerColor={FAQ_DATA.answerColor}
          ctaTitleColor={FAQ_DATA.ctaTitleColor}
          ctaTextColor={FAQ_DATA.ctaTextColor}
          buttonBorderColor={FAQ_DATA.buttonBorderColor}
          buttonTextColor={FAQ_DATA.buttonTextColor}
        />
      </main>
      
      <Footer />
    </div>
  );
}