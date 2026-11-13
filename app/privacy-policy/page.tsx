import type { Metadata } from 'next';
import LegalPageTemplate from "@/app/components/templates/LegalPageTemplate";
import PrivacyPolicyContent from "./PrivacyPolicyContent";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Software@Scale privacy policy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate title="Privacy Policy">
      <PrivacyPolicyContent />
    </LegalPageTemplate>
  );
}
