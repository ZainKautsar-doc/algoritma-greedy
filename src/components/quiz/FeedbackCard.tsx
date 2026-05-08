import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface FeedbackCardProps {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function FeedbackCard({ 
  isCorrect, 
  explanation, 
  onNext,
  isLastQuestion
}: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "mt-8 p-6 rounded-[24px] border-[3px] border-neo-black shadow-neo-brutal-lg",
        isCorrect ? "bg-neo-green/20" : "bg-neo-red/20"
      )}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={cn(
          "w-12 h-12 rounded-full border-[3px] border-neo-black flex items-center justify-center text-2xl shrink-0 shadow-neo-brutal",
          isCorrect ? "bg-neo-green" : "bg-neo-red"
        )}>
          {isCorrect ? "✓" : "✗"}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-neo-black mb-1">
            {isCorrect ? "Jawaban Benar!" : "Jawaban Salah"}
          </h4>
          <p className="text-lg font-medium text-neo-black/80 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={onNext}
          variant="default"
          className="bg-neo-blue text-white"
        >
          {isLastQuestion ? "Lihat Hasil" : "Soal Berikutnya →"}
        </Button>
      </div>
    </motion.div>
  );
}
