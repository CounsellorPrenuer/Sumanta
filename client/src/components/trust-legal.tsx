import { Shield, Lock, FileCheck, Scale, Award, CheckCircle, Building, Globe } from "lucide-react";
import { Link } from "wouter";

export default function TrustLegal() {
  const certifications = [
    {
      icon: Award,
      title: "ICF Certified",
      description: "International Coach Federation accredited professional coaching",
    },
    {
      icon: Shield,
      title: "Data Protected",
      description: "GDPR compliant data handling and privacy protection",
    },
    {
      icon: FileCheck,
      title: "Verified Credentials",
      description: "All certifications verified and documented",
    },
    {
      icon: Scale,
      title: "Ethical Standards",
      description: "Adherence to professional coaching ethics and guidelines",
    },
  ];

  const legalItems = [
    {
      title: "Refund Policy",
      description: "100% satisfaction guarantee within 7 days",
      link: "#",
    },
    {
      title: "Code of Ethics",
      description: "Our professional standards and ethical guidelines",
      link: "#",
    },
  ];

  const trustIndicators = [
    { value: "3,725+", label: "Professionals Served" },
    { value: "24+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
    { value: "100%", label: "Confidential" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border border-blue-300 text-blue-700 font-semibold mb-6">
            <Shield className="w-5 h-5 mr-2" />
            Trust & Compliance
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trust is Our
            <span className="text-gradient-blue block mt-2">Foundation</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We maintain the highest standards of professional integrity, data security, and ethical coaching practices.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{indicator.value}</div>
              <div className="text-sm text-gray-600 font-medium">{indicator.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications & Standards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="premium-card p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Documents */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <Scale className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Legal & Compliance</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legalItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.link}
                className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">SSL Secured</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Data Encrypted</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Enterprise Grade</span>
            </div>
          </div>
        </div>

        {/* Compliance Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Leadcrest Consulting is committed to maintaining the highest standards of professional conduct, 
            data protection, and client confidentiality in accordance with international coaching standards and local regulations.
          </p>
        </div>
      </div>
    </section>
  );
}