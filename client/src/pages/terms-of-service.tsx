import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import SEOMeta from "@/components/seo-meta";
import { FileText, Scale, AlertCircle, CheckCircle, Ban, Globe } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <SEOMeta 
        title="Terms of Service"
        description="Read the terms and conditions for using Leadcrest Consulting services. Understand your rights and responsibilities."
        keywords="terms of service, terms and conditions, legal terms, user agreement"
      />
      <PremiumNavigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Legal Agreement
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" role="heading" aria-level={1}>
              Terms of Service
            </h1>
            
            <p className="text-lg text-gray-600">
              Effective Date: January 26, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Leadcrest Consulting 
                ("Company," "we," "us," or "our") concerning your access to and use of the leadcrestconsulting.com website 
                and any related services (collectively, the "Services").
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of 
                these terms, then you may not access the Services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700 mb-4">Leadcrest Consulting provides the following services:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Career counseling and coaching for professionals</li>
                <li>Psychometric assessments and analysis</li>
                <li>Executive coaching and leadership development</li>
                <li>Corporate parenting and wellbeing programs</li>
                <li>Educational resources and webinars</li>
                <li>Career transition support</li>
                <li>Mentorship programs</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                User Responsibilities
              </h2>
              <p className="text-gray-700 mb-4">By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use the Services only for lawful purposes</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not interfere with or disrupt the Services</li>
                <li>Not attempt to gain unauthorized access to any part of the Services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fees and Billing</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All fees are quoted in Indian Rupees (INR) unless otherwise specified</li>
                <li>Payment is due upon booking or as specified in the service agreement</li>
                <li>We accept payments via credit card, debit card, UPI, and bank transfer</li>
                <li>All payments are processed through secure payment gateways</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Refund Policy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Discovery calls are provided free of charge</li>
                <li>Paid services may be cancelled up to 48 hours before the scheduled session for a full refund</li>
                <li>Cancellations within 48 hours are subject to a 50% cancellation fee</li>
                <li>No-shows forfeit the full session fee</li>
                <li>Package purchases are non-refundable after the first session</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, materials, and resources provided through our Services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Assessment tools and methodologies</li>
                <li>Course materials and presentations</li>
                <li>Reports and analysis</li>
                <li>Website content and design</li>
                <li>Trademarks and logos</li>
              </ul>
              <p className="text-gray-700 mt-4">
                are the exclusive property of Leadcrest Consulting and are protected by intellectual property laws. 
                You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality regarding all client information and counseling sessions. Information 
                shared during sessions will not be disclosed to third parties without your explicit consent, except as 
                required by law or in cases where there is a risk of harm to yourself or others.
              </p>
              <p className="text-gray-700 mt-4">
                You agree to maintain the confidentiality of any proprietary information, methodologies, or materials 
                provided during our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                Disclaimers and Limitations
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Disclaimer</h3>
              <p className="text-gray-700">
                Our career counseling and coaching services are provided for informational and guidance purposes only. 
                We do not guarantee specific outcomes, job placements, admission to educational institutions, or career success. 
                Individual results may vary based on personal effort, circumstances, and external factors.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">No Professional Relationship</h3>
              <p className="text-gray-700">
                Our services do not create an employer-employee, agency, partnership, or joint venture relationship. 
                We are not responsible for decisions you make based on our guidance.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Limitation of Liability</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, Leadcrest Consulting shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-red-600" />
                Prohibited Uses
              </h2>
              <p className="text-gray-700 mb-4">You may not use our Services to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful or malicious code</li>
                <li>Collect or harvest user information</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Impersonate another person or entity</li>
                <li>Interfere with other users' enjoyment of the Services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate or suspend your access to our Services immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-700 mt-4">
                Upon termination, your right to use the Services will cease immediately. All provisions of these Terms 
                which by their nature should survive termination shall survive.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless Leadcrest Consulting and its officers, directors, 
                employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, 
                costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of 
                the Services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-600" />
                Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
                its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought 
                exclusively in the courts located in Mumbai, Maharashtra, India.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700">
                Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be 
                resolved through good faith negotiations. If the dispute cannot be resolved through negotiation within 
                30 days, it shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation 
                Act, 2015 of India.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision 
                is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued 
                use of the Services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
                and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
                applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            <div className="mb-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions or concerns regarding these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Leadcrest Consulting</strong></p>
                <p>Email: legal@leadcrestconsulting.com</p>
                <p>Phone: +91-9876543210</p>
                <p>Address: Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="text-center text-gray-600 mt-8">
              <p>By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}