import PremiumNavigation from "@/components/premium-navigation";
import Footer from "@/components/footer";
import { Award, Users, Globe, BookOpen, CheckCircle, Star, TrendingUp } from "lucide-react";

export default function WhyCCCEdu() {
  const reasons = [
    {
      icon: Award,
      title: "23+ Years of Excellence",
      description: "Over two decades of proven expertise in career counseling and educational guidance.",
      stats: "Since 2001"
    },
    {
      icon: Users,
      title: "5000+ Success Stories",
      description: "Thousands of students and professionals have transformed their careers with our guidance.",
      stats: "95% Success Rate"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Helping students secure admissions in top universities across 15+ countries worldwide.",
      stats: "15+ Countries"
    },
    {
      icon: BookOpen,
      title: "Scientific Approach",
      description: "Evidence-based psychometric assessments and data-driven career recommendations.",
      stats: "DMIT Certified"
    }
  ];

  const certifications = [
    "Certified Career Counsellor (IAAP)",
    "International Association of Applied Psychology Member",
    "Asia Pacific Career Development Association (APCDA)",
    "Global Career Development Association (GCDA)",
    "Mentoria Certified Partner",
    "DMIT Assessment Specialist"
  ];

  const achievements = [
    {
      year: "2001",
      title: "Foundation Established",
      description: "CCC Education Foundation was founded with a mission to provide world-class career guidance."
    },
    {
      year: "2005",
      title: "First 1000 Students",
      description: "Reached the milestone of successfully guiding 1000+ students to their dream careers."
    },
    {
      year: "2010",
      title: "International Expansion",
      description: "Started helping students with foreign admissions across multiple countries."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched online counseling platform to reach students globally."
    },
    {
      year: "2020",
      title: "Mentoria Partnership",
      description: "Partnered with Mentoria to enhance our career guidance services."
    },
    {
      year: "2025",
      title: "5000+ Success Stories",
      description: "Celebrating over 5000 successful career transformations and continuing to grow."
    }
  ];

  return (
    <div className="min-h-screen">
      <PremiumNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="text-gradient-blue block">CCC Education?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              With over 23 years of excellence in career counseling, we've built India's most trusted platform for career guidance and educational success.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {reasons.map((reason, index) => (
                <div key={index} className="premium-card p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{reason.stats}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Proven Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine scientific assessment, personalized counseling, and industry expertise to create a comprehensive career development experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="premium-card p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific Assessment</h3>
              <p className="text-gray-600 mb-6">
                We use advanced psychometric tools including DMIT analysis to understand your unique personality, interests, and aptitudes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  DMIT Brain Analysis
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personality Profiling
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Interest & Aptitude Tests
                </li>
              </ul>
            </div>

            <div className="premium-card p-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 mb-6">
                Our certified counselors provide personalized guidance based on your assessment results and career aspirations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  1-on-1 Counseling Sessions
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Career Roadmap Creation
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ongoing Support
                </li>
              </ul>
            </div>

            <div className="premium-card p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Success</h3>
              <p className="text-gray-600 mb-6">
                We don't just guide you once - we provide ongoing support to ensure your continued career growth and success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Regular Follow-ups
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Industry Updates
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Alumni Network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our founder Manpreet Kaur holds multiple international certifications ensuring you receive world-class guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="premium-card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small initiative to India's leading career counseling platform - here's our story of growth and impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{achievement.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 relative">
                  {index !== achievements.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-blue-200 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}