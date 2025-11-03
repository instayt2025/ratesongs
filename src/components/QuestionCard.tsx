import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
}

const QuestionCard = ({ question, options, onSelect }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto px-4"
    >
      <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
          {question}
        </h2>
        <div className="space-y-3">
          {options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => onSelect(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 text-left rounded-xl border-2 border-border hover:border-primary transition-all duration-200 bg-background text-foreground font-medium"
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
