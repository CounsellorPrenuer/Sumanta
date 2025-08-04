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
    question: "What percentage of your daily work tasks could be automated by AI if your company invested in the right tools?",
    options: [
      { text: "Less than 20% - My work is highly creative and strategic", score: 4 },
      { text: "20-40% - Some routine tasks but mostly requires human expertise", score: 3 },
      { text: "40-60% - Significant portions involve predictable processes", score: 2 },
      { text: "60-80% - Most of my work follows established patterns and rules", score: 1 },
      { text: "Over 80% - My role is primarily routine, repetitive, or rule-based", score: 0 }
    ]
  },
  {
    id: 2,
    question: "If your company had to choose between hiring a new person in your role vs. implementing AI automation, what would likely happen?",
    options: [
      { text: "They'd always hire human - my role requires irreplaceable human skills", score: 4 },
      { text: "Probably hire human - AI can't replicate my complex decision-making", score: 3 },
      { text: "Could go either way - depends on budget and AI capabilities", score: 2 },
      { text: "Likely choose AI - it would be faster and more cost-effective", score: 1 },
      { text: "Definitely choose AI - my tasks are easily automated", score: 0 }
    ]
  },
  {
    id: 3,
    question: "How quickly could someone with basic AI tools potentially replace 50% of your output?",
    options: [
      { text: "Never - my expertise takes years to develop and can't be replicated", score: 4 },
      { text: "2+ years - they'd need significant training and experience", score: 3 },
      { text: "6-12 months - with some training they could handle basic parts", score: 2 },
      { text: "1-3 months - AI could help them match much of my output quickly", score: 1 },
      { text: "Within weeks - AI tools could immediately handle most of what I do", score: 0 }
    ]
  },
  {
    id: 4,
    question: "When you look at job postings in your field today vs. 2 years ago, what do you notice?",
    options: [
      { text: "Same requirements - my field hasn't changed much", score: 4 },
      { text: "Some new tech skills mentioned but core role unchanged", score: 3 },
      { text: "Growing emphasis on 'AI-savvy' and tech integration", score: 2 },
      { text: "Many postings now require AI/automation experience", score: 1 },
      { text: "Fewer jobs available - many roles seem to be disappearing", score: 0 }
    ]
  },
  {
    id: 5,
    question: "If you had to justify why your company should keep your role instead of automating it, what would be your strongest argument?",
    options: [
      { text: "I provide strategic vision and creative problem-solving", score: 4 },
      { text: "I manage relationships and make complex judgment calls", score: 3 },
      { text: "I handle exceptions and edge cases that AI can't", score: 2 },
      { text: "I'm cheaper than implementing new technology... for now", score: 1 },
      { text: "Honestly, I'd struggle to make a compelling case", score: 0 }
    ]
  },
  {
    id: 6,
    question: "How prepared are you if your role gets disrupted by AI in the next 12-24 months?",
    options: [
      { text: "Fully prepared - I've been actively building AI-proof skills", score: 4 },
      { text: "Somewhat prepared - I understand what's needed and have a plan", score: 3 },
      { text: "Starting to prepare - I know I need to act but haven't started", score: 2 },
      { text: "Not prepared - I hope it won't affect me but have no backup plan", score: 1 },
      { text: "Completely unprepared - I haven't even thought about it seriously", score: 0 }
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
    if (score >= 75) return "You're in a relatively safe position, but even 'safe' roles are evolving rapidly. Stay ahead with strategic positioning.";
    if (score >= 50) return "Your role has moderate AI replacement risk. Parts of your job are already automatable. Act now before it's too late.";
    if (score >= 25) return "WARNING: Your career faces significant AI disruption. Large portions of your role can be automated. Immediate action required.";
    return "CRITICAL: Your job is in immediate danger of AI replacement. Most of your tasks are highly automatable. You need urgent career repositioning.";
  };

  const getUrgencyMessage = (score: number) => {
    if (score >= 75) return "Even 'safe' professionals are getting strategic career coaching";
    if (score >= 50) return "Don't wait until you're competing with AI for your own job";
    if (score >= 25) return "Every month you delay is ground lost to AI automation";
    return "Your career timeline just accelerated - immediate action is critical";
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