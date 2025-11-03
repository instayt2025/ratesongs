import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import appleMusicLogo from "@/assets/apple-music-logo.jpg";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AgeGateDialog from "@/components/AgeGateDialog";

const questions = [
  {
    question: "How often do you listen to music on Apple Music or other platforms?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
  },
  {
    question: "What do you spend most of your money on related to music/entertainment?",
    options: [
      "Streaming subscriptions",
      "Concerts & live shows",
      "Headphones & gadgets",
      "Merch & accessories",
    ],
  },
  {
    question: "Where are you from?",
    options: ["United States", "United Kingdom", "Canada", "Australia"],
  },
  {
    question: "Are you 18 or older?",
    options: ["Yes", "No"],
  },
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAgeGate, setShowAgeGate] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    // Check if it's the age gate question and user selected "No"
    if (currentStep === 3 && answer === "No") {
      setShowAgeGate(true);
      return;
    }

    // Move to next question or final page
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        navigate("/final");
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AgeGateDialog open={showAgeGate} />
      
      <div className="flex-shrink-0">
        <div className="pt-6 pb-4 px-4">
          <img
            src={appleMusicLogo}
            alt="Apple Music"
            className="h-12 md:h-16 mx-auto object-contain"
          />
        </div>
        <ProgressBar currentStep={currentStep + 1} totalSteps={5} />
      </div>

      <div className="flex-1 flex items-center justify-center py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <QuestionCard
              question={questions[currentStep].question}
              options={questions[currentStep].options}
              onSelect={handleAnswer}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
