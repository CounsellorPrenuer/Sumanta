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
    question: "How much of your work involves writing emails, reports, summaries, or other documents?",
    options: [
      { text: "Rarely - I mostly work with people directly or do hands-on tasks", score: 4 },
      { text: "Sometimes - I write some documents but it's not my main focus", score: 3 },
      { text: "Regularly - writing and documentation is a significant part of my job", score: 2 },
      { text: "Daily - I spend considerable time writing emails, reports, or content", score: 1 },
      { text: "Constantly - most of my day involves creating written content", score: 0 }
    ]
  },
  {
    id: 2,
    question: "How much time do you spend doing calculations, data entry, scheduling, or organizing information?",
    options: [
      { text: "Very little - my work doesn't involve much data or calculations", score: 4 },
      { text: "Some - I handle data occasionally but it's not the main part", score: 3 },
      { text: "Moderate amount - data work is a regular part of what I do", score: 2 },
      { text: "Quite a bit - I spend significant time organizing information", score: 1 },
      { text: "Most of my time - my job is primarily about processing information", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Could someone learn to do the basic parts of your job by watching YouTube videos and practicing for a few weeks?",
    options: [
      { text: "Absolutely not - my job requires years of experience and complex judgment", score: 4 },
      { text: "Very unlikely - they might learn basics but would miss important nuances", score: 3 },
      { text: "Maybe some parts - they could handle simple tasks but not the complex ones", score: 2 },
      { text: "Probably yes - much of what I do could be learned fairly quickly", score: 1 },
      { text: "Definitely yes - my tasks are straightforward and easy to learn", score: 0 }
    ]
  },
  {
    id: 4,
    question: "How often do you need to read people's emotions, build trust, or handle sensitive personal situations?",
    options: [
      { text: "All the time - understanding people and emotions is central to my success", score: 4 },
      { text: "Frequently - people skills are very important in my role", score: 3 },
      { text: "Sometimes - I deal with people but it's not overly complex", score: 2 },
      { text: "Rarely - most of my interactions are straightforward and professional", score: 1 },
      { text: "Almost never - I work mostly with systems, data, or processes", score: 0 }
    ]
  },
  {
    id: 5,
    question: "If your company wanted to save money, how easily could they replace you with someone cheaper or a digital tool?",
    options: [
      { text: "Very difficult - I bring unique expertise that's hard to replace", score: 4 },
      { text: "Difficult - they'd struggle to find someone with my specific experience", score: 3 },
      { text: "Possible but risky - they could try but might lose quality or efficiency", score: 2 },
      { text: "Fairly easy - someone else could probably do my job for less money", score: 1 },
      { text: "Very easy - there are many people or tools that could replace me", score: 0 }
    ]
  },
  {
    id: 6,
    question: "How much of your work could be done remotely by someone in another country for much lower pay?",
    options: [
      { text: "None - my work requires being physically present and local knowledge", score: 4 },
      { text: "Very little - most of what I do needs to be done locally", score: 3 },
      { text: "Some parts - certain tasks could be done remotely but not the main work", score: 2 },
      { text: "Most of it - much of my work could be done from anywhere", score: 1 },
      { text: "All of it - my entire job could be done remotely by someone elsewhere", score: 0 }
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
                  Career Vulnerability Assessment
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
    if (score >= 75) return "Your role has good protection, but AI tools are advancing rapidly. Companies are already using AI to write emails, create reports, and handle basic tasks that used to require humans.";
    if (score >= 50) return "Parts of your job are at risk. AI can now write professional emails, analyze data, create presentations, and handle customer service. Companies are starting to use these tools to reduce staff.";
    if (score >= 25) return "WARNING: AI tools can already do much of what you do. ChatGPT writes reports, AI handles scheduling, virtual assistants manage emails. Your role is becoming increasingly replaceable.";
    return "CRITICAL: Your job is highly vulnerable. AI agents can now handle writing, data processing, scheduling, basic calculations, and many routine tasks. Companies are actively replacing workers with AI tools.";
  };

  const getUrgencyMessage = (score: number) => {
    if (score >= 75) return "AI tools are already replacing workers in 'safe' roles - stay ahead";
    if (score >= 50) return "While you take this quiz, companies are implementing AI to reduce headcount";
    if (score >= 25) return "AI replacement is happening now, not in the future";
    return "Every day you wait, AI gets better at doing your job";
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