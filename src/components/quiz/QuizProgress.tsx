import { cn } from "../../utils/cn";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  isCompleted?: boolean;
}

export default function QuizProgress({ currentQuestion, totalQuestions, score, isCompleted }: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-neo-black/60 mb-1">
            Progress Kuis
          </p>
          <h3 className="text-2xl font-bold text-neo-black">
            Soal {isCompleted ? totalQuestions : currentQuestion} dari {totalQuestions}
          </h3>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold uppercase tracking-wider text-neo-black/60 mb-1">
            Skor
          </p>
          <div className="bg-neo-yellow border-[3px] border-neo-black px-4 py-1 rounded-full shadow-neo-brutal font-bold text-xl">
            {score} Poin
          </div>
        </div>
      </div>
      
      <div className="w-full h-6 bg-white border-[3px] border-neo-black rounded-full overflow-hidden shadow-neo-brutal">
        <div 
          className="h-full bg-neo-blue transition-all duration-500 ease-out border-r-[3px] border-neo-black"
          style={{ width: `${isCompleted ? 100 : progress}%` }}
        />
      </div>
    </div>
  );
}
