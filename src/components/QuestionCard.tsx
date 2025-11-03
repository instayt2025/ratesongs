import { motion } from "framer-motion";

interface QuestionCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  ageRejected?: boolean;
}

const QuestionCard = ({ question, options, onSelect, ageRejected }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-lg mx-auto px-4"
    >
      <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
        {ageRejected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-destructive/10 rounded-lg border-2 border-destructive"
          >
            <p className="text-sm md:text-base text-destructive font-medium text-center">
              You must be 18 or older to participate in this application process.
            </p>
          </motion.div>
        )}
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center leading-tight">
          {question}
        </h2>
        <div className="space-y-3 md:space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => onSelect(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 md:p-5 text-left rounded-xl border-2 border-border hover:border-primary transition-all duration-200 bg-background text-foreground font-medium text-base md:text-lg"
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
