import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Brain, Target, TrendingUp, Shield, X } from 'lucide-react';

interface AssessmentQuestion {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (score: number) => void;
}

const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: "How much of your typical workday involves doing the same types of tasks repeatedly?",
    options: [
      { text: "Almost never - every day brings unique challenges and creative problem-solving", score: 4 },
      { text: "Occasionally - I have some routine tasks but mostly handle different situations", score: 3 },
      { text: "About half - I split time between routine work and unique situations", score: 2 },
      { text: "Most days - I follow similar processes and procedures regularly", score: 1 },
      { text: "Almost always - my work is very predictable and follows the same patterns", score: 0 }
    ]
  },
  {
    id: 2,
    question: "If you were sick for a month, how difficult would it be for someone else to temporarily cover your responsibilities?",
    options: [
      { text: "Nearly impossible - my role requires deep expertise and relationships", score: 4 },
      { text: "Very difficult - they'd need extensive training and guidance", score: 3 },
      { text: "Somewhat difficult - they could handle basics but would struggle with complex parts", score: 2 },
      { text: "Manageable - someone could learn my tasks fairly quickly with some training", score: 1 },
      { text: "Easy - anyone could step in and do my job with minimal instruction", score: 0 }
    ]
  },
  {
    id: 3,
    question: "How much of your work involves face-to-face interaction, building relationships, or understanding people's emotions?",
    options: [
      { text: "It's central to my role - I'm constantly reading people and building relationships", score: 4 },
      { text: "Very important - I regularly need to understand and connect with others", score: 3 },
      { text: "Moderately important - some people interaction but not the main focus", score: 2 },
      { text: "Limited - I interact with people but it's mostly straightforward communication", score: 1 },
      { text: "Minimal - I mostly work with data, systems, or processes rather than people", score: 0 }
    ]
  },
  {
    id: 4,
    question: "When problems come up at work, how often do you need to come up with creative solutions that aren't in any manual or procedure?",
    options: [
      { text: "Constantly - I'm always solving unique problems that require creative thinking", score: 4 },
      { text: "Frequently - I often need to figure out new approaches to challenges", score: 3 },
      { text: "Sometimes - I handle both routine issues and occasional unique problems", score: 2 },
      { text: "Rarely - most problems I face have established solutions or procedures", score: 1 },
      { text: "Almost never - there are clear steps to follow for almost everything I do", score: 0 }
    ]
  },
  {
    id: 5,
    question: "How often do you find yourself learning completely new skills or adapting to new tools and methods?",
    options: [
      { text: "Constantly - I'm always learning and adapting to stay current", score: 4 },
      { text: "Regularly - I make an effort to learn new things several times a year", score: 3 },
      { text: "Occasionally - I learn new things when required by my job", score: 2 },
      { text: "Rarely - I mostly stick to what I already know and do well", score: 1 },
      { text: "Almost never - I prefer to use the same methods and tools I've always used", score: 0 }
    ]
  },
  {
    id: 6,
    question: "If someone asked you to describe your job to a 10-year-old, how would you explain what makes you valuable at work?",
    options: [
      { text: "I solve problems no one else can solve and come up with new ideas", score: 4 },
      { text: "I help people and make important decisions based on experience", score: 3 },
      { text: "I know how to do specific tasks well and train others", score: 2 },
      { text: "I follow procedures correctly and get things done efficiently", score: 1 },
      { text: "I'm not sure how to explain what makes me special at work", score: 0 }
    ]
  }
];

export function AICareerAssessment({ isOpen, onClose, onComplete }: AssessmentModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleAnswerSelect = (score: number) => {
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      
      if (currentQuestion < assessmentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Calculate final score
        const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
        const maxScore = assessmentQuestions.length * 4;
        const percentage = Math.round((totalScore / maxScore) * 100);
        onComplete(percentage);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" 
                   style={{background: 'linear-gradient(135deg, hsl(220, 91%, 85%), hsl(220, 91%, 90%))'}}>
                <Brain className="w-5 h-5" style={{color: 'hsl(220, 91%, 50%)'}} />
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{color: 'hsl(220, 91%, 25%)'}}>
                  AI Career Readiness Assessment
                </h2>
                <p className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {assessmentQuestions.length}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))'
              }}
            />
          </div>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-900 leading-relaxed">
              {assessmentQuestions[currentQuestion].question}
            </h3>
            
            <div className="space-y-3">
              {assessmentQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option.score)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    selectedOption === option.score
                      ? 'border-blue-300 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  style={{
                    background: selectedOption === option.score 
                      ? 'linear-gradient(135deg, hsl(220, 91%, 97%), hsl(220, 91%, 99%))' 
                      : 'white'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{option.text}</span>
                    <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                      selectedOption === option.score
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === option.score && (
                        <div className="w-full h-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`flex items-center space-x-2 px-8 py-3 rounded-2xl font-semibold transition-all ${
                selectedOption === null
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'text-white shadow-lg hover:scale-105'
              }`}
              style={{
                background: selectedOption !== null 
                  ? 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))' 
                  : undefined
              }}
            >
              <span>{currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  onBookCall: () => void;
}

export function AssessmentResults({ isOpen, onClose, score, onBookCall }: ResultsModalProps) {
  if (!isOpen) return null;

  const getScoreLevel = (score: number) => {
    if (score >= 75) return { level: 'Safe for Now', color: 'hsl(142, 71%, 45%)', icon: Shield };
    if (score >= 50) return { level: 'Moderate Risk', color: 'hsl(45, 93%, 45%)', icon: TrendingUp };
    if (score >= 25) return { level: 'High Risk', color: 'hsl(25, 95%, 53%)', icon: Target };
    return { level: 'Immediate Danger', color: 'hsl(0, 84%, 60%)', icon: Brain };
  };

  const { level, color, icon: Icon } = getScoreLevel(score);

  const getRecommendation = (score: number) => {
    if (score >= 75) return "Your role has strong human elements, but the job market is changing fast. Smart professionals are getting ahead of the curve now.";
    if (score >= 50) return "Your job has a mix of human and routine elements. The routine parts are becoming replaceable. It's time to strengthen your unique value.";
    if (score >= 25) return "WARNING: Much of your work could be done by others or new technology. You need to develop irreplaceable skills before it's too late.";
    return "CRITICAL: Your role is highly vulnerable to replacement. Most of what you do could be handled by technology or less expensive workers. Urgent action needed.";
  };

  const getUrgencyMessage = (score: number) => {
    if (score >= 75) return "Even secure professionals are future-proofing their careers";
    if (score >= 50) return "Don't wait until you're competing for fewer available positions";
    if (score >= 25) return "The window for career repositioning is closing rapidly";
    return "Your job security is more fragile than you think - act now";
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full">
        <div className="p-6 text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
               style={{background: `linear-gradient(135deg, ${color}15, ${color}25)`}}>
            <Icon className="w-10 h-10" style={{color}} />
          </div>
          
          <h2 className="text-2xl font-bold mb-2" style={{color: 'hsl(220, 91%, 25%)'}}>
            Your AI Readiness Score
          </h2>
          
          <div className="text-6xl font-bold mb-2" style={{color}}>
            {score}%
          </div>
          
          <div className="text-lg font-semibold mb-4" style={{color}}>
            {level}
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {getRecommendation(score)}
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
            <p className="text-sm font-medium text-yellow-800 text-center">
              ⚡ {getUrgencyMessage(score)}
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={onBookCall}
              className="w-full px-6 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{background: 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))'}}
            >
              Get Emergency Career Strategy Call
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              Free 10-minute strategic consultation • No sales pressure
            </p>
            
            <button
              onClick={onClose}
              className="w-full px-6 py-3 rounded-2xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Get personalized strategies based on your assessment results
          </p>
        </div>
      </div>
    </div>
  );
}