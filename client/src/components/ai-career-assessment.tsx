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
    question: "How often do you currently use AI tools in your work?",
    options: [
      { text: "Daily - I integrate AI into most of my tasks", score: 4 },
      { text: "Weekly - I use AI for specific projects", score: 3 },
      { text: "Monthly - I occasionally experiment with AI", score: 2 },
      { text: "Rarely - I've tried AI tools once or twice", score: 1 },
      { text: "Never - I haven't used AI tools at work", score: 0 }
    ]
  },
  {
    id: 2,
    question: "How would you describe your role's dependency on routine, repetitive tasks?",
    options: [
      { text: "My work is highly creative and strategic", score: 4 },
      { text: "Mix of creative and routine work", score: 3 },
      { text: "Some routine tasks but requires human judgment", score: 2 },
      { text: "Mostly routine with standard procedures", score: 1 },
      { text: "Highly repetitive and rule-based tasks", score: 0 }
    ]
  },
  {
    id: 3,
    question: "How well do you understand the AI trends affecting your industry?",
    options: [
      { text: "Expert - I track AI developments and their impact", score: 4 },
      { text: "Good - I stay informed about major AI trends", score: 3 },
      { text: "Basic - I know AI is important but lack details", score: 2 },
      { text: "Limited - I hear about AI but don't understand the impact", score: 1 },
      { text: "Unaware - I don't know how AI affects my field", score: 0 }
    ]
  },
  {
    id: 4,
    question: "How adaptable are your current skills to new technologies?",
    options: [
      { text: "Highly transferable - My skills apply across technologies", score: 4 },
      { text: "Mostly transferable - I can adapt to new tools quickly", score: 3 },
      { text: "Somewhat transferable - Need some retraining", score: 2 },
      { text: "Limited transferability - Skills are very specific", score: 1 },
      { text: "Not transferable - My skills are highly specialized to current tools", score: 0 }
    ]
  },
  {
    id: 5,
    question: "How much of your work involves human interaction and emotional intelligence?",
    options: [
      { text: "Central - My role requires high emotional intelligence", score: 4 },
      { text: "Important - Regular human interaction is key", score: 3 },
      { text: "Moderate - Some human interaction required", score: 2 },
      { text: "Limited - Minimal human interaction needed", score: 1 },
      { text: "None - I work mostly with data/systems", score: 0 }
    ]
  },
  {
    id: 6,
    question: "How proactive are you about learning new skills and technologies?",
    options: [
      { text: "Very proactive - I constantly upskill and learn", score: 4 },
      { text: "Proactive - I regularly take courses and workshops", score: 3 },
      { text: "Somewhat proactive - I learn when required", score: 2 },
      { text: "Reactive - I only learn when forced to", score: 1 },
      { text: "Not proactive - I stick to what I know", score: 0 }
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
    if (score >= 80) return { level: 'AI-Ready Leader', color: 'hsl(142, 71%, 45%)', icon: Shield };
    if (score >= 60) return { level: 'Adaptation Ready', color: 'hsl(45, 93%, 45%)', icon: TrendingUp };
    if (score >= 40) return { level: 'Needs Preparation', color: 'hsl(25, 95%, 53%)', icon: Target };
    return { level: 'High Risk', color: 'hsl(0, 84%, 60%)', icon: Brain };
  };

  const { level, color, icon: Icon } = getScoreLevel(score);

  const getRecommendation = (score: number) => {
    if (score >= 80) return "You're well-positioned for the AI transition. Let's discuss advanced strategies to maintain your competitive edge.";
    if (score >= 60) return "You have a solid foundation. A focused upskilling strategy can make you AI-proof.";
    if (score >= 40) return "There are gaps in your AI readiness. Let's create a personalized transformation plan.";
    return "Your role faces significant AI disruption risk. Immediate strategic planning is crucial.";
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
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {getRecommendation(score)}
          </p>
          
          <div className="space-y-4">
            <button
              onClick={onBookCall}
              className="w-full px-6 py-4 rounded-2xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{background: 'linear-gradient(135deg, hsl(220, 91%, 50%), hsl(267, 47%, 50%))'}}
            >
              Book Free 10-min Discovery Call
            </button>
            
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