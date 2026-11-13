import { ReactNode } from 'react';

// Policy text is copied unchanged from "Software at Scale Privacy Policy - proposed.html".
// Change the wording only when the approved policy changes.

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-[#0c2080] font-bold text-2xl md:text-[28px] leading-[1.25] tracking-[-0.2px]">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 flex flex-col gap-2 marker:text-[#0c2080]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const linkClass = 'text-[#0c2080] underline underline-offset-2 hover:text-[#002b50]';

const COLLECTION_ROWS: [string, string][] = [
  ['Client or prospective client contact', 'Name, job title, employer, email, phone, business address, communications with us'],
  ['Job candidate or contractor', 'CV, work history, references, and details needed to engage and pay you'],
  ['Supplier contact', 'Name, role, contact details, invoicing and payment details'],
  ['Website visitor', 'IP address, browser and device details, pages viewed, and details you enter in our contact form'],
  ['User of systems we support', 'Access logs, authentication records, support tickets and security monitoring data'],
];

export default function PrivacyPolicyContent() {
  return (
    <div className="flex flex-col gap-12 text-[#00050a] font-normal text-base leading-[1.6] w-full [&_p]:m-0">
      <Section title="About this policy">
        <p>This policy explains how Software@Scale handles personal information. It applies to everyone we deal with, including clients, prospective clients, job candidates, contractors, suppliers and visitors to our website.</p>
        <p>Swarm Operations Pty Ltd (ABN 46 666 017 698), trading as Software at Scale (Software@Scale), provides ICT services in Australia, including IT consulting, staff augmentation and managed services. In this policy, “we”, “us” and “our” mean Software@Scale.</p>
        <p>The <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs) apply to how we handle personal information.</p>
      </Section>

      <Section title="Information we handle for clients">
        <p>In addition to handling personal information for our own business, we may access or handle personal information when providing services to clients. For example, we may work in a client’s systems, use information a client supplies for a consulting engagement, or support systems that hold a client’s information.</p>
        <p>If your request concerns information we handle for a client, you can contact us using the details below. We may need to consult the client to respond.</p>
      </Section>

      <Section title="What we collect and how">
        <p>What we collect depends on how you deal with us.</p>
        <div className="overflow-x-auto rounded-2xl bg-white">
          <table className="w-full min-w-[520px] border-collapse text-[15px] text-left">
            <thead>
              <tr>
                <th scope="col" className="bg-[#0c2080] text-white font-semibold px-4 py-3">Who you are</th>
                <th scope="col" className="bg-[#0c2080] text-white font-semibold px-4 py-3">Information we may collect</th>
              </tr>
            </thead>
            <tbody>
              {COLLECTION_ROWS.map(([who, what]) => (
                <tr key={who} className="border-b border-[#a9c8e6] last:border-b-0 align-top">
                  <td className="px-4 py-3 font-semibold">{who}</td>
                  <td className="px-4 py-3">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p><strong>How we collect it.</strong> We usually collect information directly from you, for example by email, through our website, in meetings or during recruitment. Where the law permits us to collect information from someone else, sources can include referees or clients. We collect information through third-party services where we have obtained your consent and the collection is permitted by law.</p>
      </Section>

      <Section title="Why we collect, hold and use it">
        <p>We collect, hold and use personal information to:</p>
        <List
          items={[
            'deliver our services and manage our relationships with clients;',
            'assess candidates and engage contractors to deliver our services;',
            'process invoices and payments;',
            'operate, secure and improve our systems and website;',
            'monitor security, prevent fraud and assess risks;',
            'meet our legal, regulatory and contractual obligations.',
          ]}
        />
      </Section>

      <Section title="When we share personal information">
        <p>We may share personal information in the following circumstances, where permitted or required by law:</p>
        <List
          items={[
            'to service providers that support our operations, under agreements that require them to protect the information;',
            'to government agencies and regulators in response to lawful requests or legal requirements;',
            'to trusted security organisations for threat intelligence sharing to help prevent security incidents and fraud;',
            'in connection with a merger or acquisition. We will notify affected individuals before transferring their personal information.',
          ]}
        />
      </Section>

      <Section title="Software providers and overseas handling">
        <p>We use third-party software to run our business. The providers of that software may store or process personal information on our behalf, including outside Australia.</p>
      </Section>

      <Section title="How we hold and protect information">
        <p>We hold personal information in business systems, including cloud services. We take reasonable steps to protect it from misuse, interference, loss, and unauthorised access, modification or disclosure. Our safeguards include access controls and encryption where supported by the systems we use.</p>
        <p>We retain personal information for as long as we need it for the purposes described in this policy or as the law requires. When we no longer need it and are not required to keep it, we take reasonable steps to securely destroy or de-identify it.</p>
        <p>We notify the Office of the Australian Information Commissioner (OAIC) and individuals as required by the Notifiable Data Breaches scheme.</p>
      </Section>

      <Section title="Our website and dealing with us anonymously">
        <p>Our website uses cookies and similar technologies to make it work and to understand how visitors use it. Website analytics and visitor insight tools may use your IP address to identify the organisation you are browsing from. You can block or delete cookies in your browser settings, but some parts of the site may not work properly.</p>
        <p>Our website may link to other sites, such as LinkedIn. We are not responsible for their privacy practices.</p>
        <p>You can deal with us anonymously or use a pseudonym where it is lawful and practicable to do so.</p>
      </Section>

      <Section title="Access, correction and complaints">
        <p><strong>Access and correction.</strong> You can ask to access or correct personal information we hold about you by contacting the Privacy Officer using the details below. We may ask you to verify your identity. We will respond within a reasonable period. If we refuse your request, we will give you a written notice explaining how to complain and, where appropriate, why we refused.</p>
        <p><strong>Complaints.</strong> If you think we have mishandled your personal information or breached the APPs, contact us using the details below. Please include enough information for us to understand what happened. We will review your complaint, may contact you for more information and will let you know the outcome.</p>
        <p>If you are not satisfied with our response, you can <a className={linkClass} href="https://www.oaic.gov.au/privacy/privacy-complaints">make a privacy complaint to the OAIC</a>.</p>
      </Section>

      <Section title="Contact us">
        <p>
          Privacy Officer, Software@Scale
          <br />
          Email: <a className={linkClass} href="mailto:privacy@softwareatscale.com.au">privacy@softwareatscale.com.au</a>
          <br />
          Post: Level 57, 25 Martin Place, Sydney NSW 2000
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>We publish updates to this policy on this page.</p>
      </Section>
    </div>
  );
}
