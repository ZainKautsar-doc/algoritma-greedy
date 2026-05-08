import { QuizOption } from "../../utils/quizData";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface OptionButtonProps {
  option: QuizOption;
  isSelected: boolean;
  showFeedback: boolean;
  onClick: () => void;
  index: number;
}

const colors = [
  "bg-white",
  "bg-neo-blue/10",
  "bg-neo-yellow/10",
  "bg-neo-purple/10",
];

export default function OptionButton({ 
  option, 
  isSelected, 
  showFeedback, 
  onClick,
  index
}: OptionButtonProps) {
  const label = String.fromCharCode(65 + index); // A, B, C, D

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={showFeedback}
      className={cn(
        "w-full text-left p-4 rounded-xl border-[3px] border-neo-black transition-all flex items-center gap-4 group",
        colors[index % colors.length],
        !showFeedback && "hover:-translate-y-1 hover:shadow-neo-brutal cursor-pointer",
        isSelected && !showFeedback && "bg-neo-blue/20 -translate-y-1 shadow-neo-brutal",
        showFeedback && option.isCorrect && "bg-neo-green border-neo-black shadow-neo-brutal",
        showFeedback && isSelected && !option.isCorrect && "bg-neo-red border-neo-black shadow-neo-brutal",
        showFeedback && !isSelected && !option.isCorrect && "opacity-50"
      )}
    >
      <div className={cn(
        "w-10 h-10 shrink-0 rounded-lg border-[3px] border-neo-black flex items-center justify-center font-bold text-xl transition-colors",
        isSelected ? "bg-neo-black text-white" : "bg-white text-neo-black",
        showFeedback && option.isCorrect && "bg-white text-neo-black",
        showFeedback && isSelected && !option.isCorrect && "bg-white text-neo-black"
      )}>
        {label}
      </div>
      
      <span className="text-lg font-bold text-neo-black leading-tight">
        {option.text}
      </span>

      {showFeedback && option.isCorrect && (
        <span className="ml-auto text-2xl">✓</span>
      )}
      {showFeedback && isSelected && !option.isCorrect && (
        <span className="ml-auto text-2xl">✗</span>
      )}
    </motion.button>
  );
}
