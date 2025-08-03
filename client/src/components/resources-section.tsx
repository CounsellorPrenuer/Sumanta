import { useQuery } from "@tanstack/react-query";
import { FileText, GraduationCap, TrendingUp, Lightbulb } from "lucide-react";
import type { Resource } from "@shared/schema";

const iconMap = {
  "file-pdf": FileText,
  "graduation-cap": GraduationCap,
  "chart-line": TrendingUp,
  "lightbulb": Lightbulb,
};

export default function ResourcesSection() {
  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  if (isLoading) {
    return (
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-golden border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h2>
          <p className="text-xl text-gray-600">Download our comprehensive guides and tools to kickstart your career journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources?.map((resource) => {
            const IconComponent = iconMap[resource.iconName as keyof typeof iconMap] || FileText;
            
            return (
              <div key={resource.id} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-golden rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="text-navy hover:text-navy-light font-semibold">
                  {resource.type === 'tool' ? 'Access Tool' : 
                   resource.type === 'pdf' ? 'Download PDF' : 
                   resource.type === 'report' ? 'Download Report' : 
                   'Get Checklist'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
