import { Users, Book, Video, Infinity } from "lucide-react";

export default function PartnershipSection() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry experts and professionals for guidance."
    },
    {
      icon: Book,
      title: "Knowledge Gateway",
      description: "Access comprehensive career resources and learning materials."
    },
    {
      icon: Video,
      title: "Live Webinars",
      description: "Regular webinars on career trends and professional development."
    },
    {
      icon: Infinity,
      title: "Lifetime Access",
      description: "Continuous support throughout your career journey."
    }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Mentoria Partnership
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            All our clients get exclusive access to Mentoria's comprehensive platform and services, enhancing their career guidance experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-golden rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-blue-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
