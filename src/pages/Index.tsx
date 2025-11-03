import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import appleMusicLogo from "@/assets/apple-music-logo.png";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";

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
  const [ageRejected, setAgeRejected] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    // Handle age gate (question 4)
    if (currentStep === 3) {
      if (answer === "No") {
        setAgeRejected(true);
        return; // Don't proceed
      } else if (answer === "Yes") {
        setAgeRejected(false);
        // Proceed to final page
        setTimeout(() => {
          navigate("/final");
        }, 300);
        return;
      }
    }

    // Move to next question for other steps
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-shrink-0">
        <div className="pt-6 pb-4 px-4">
          <img
            src={appleMusicLogo}
            alt="Apple Music"
            className="h-16 md:h-20 mx-auto object-contain"
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
              ageRejected={ageRejected}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
