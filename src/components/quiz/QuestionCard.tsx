import { QuizQuestion } from "../../utils/quizData";
import OptionButton from "./OptionButton";
import { motion } from "framer-motion";

import React from "react";

interface QuestionCardProps {
  key?: React.Key;
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onOptionSelect: (optionId: string) => void;
  selectedOptionId: string | null;
  showFeedback: boolean;
}

const categoryLabels: Record<string, string> = {
  theory: "Teori",
  calculation: "Perhitungan",
  advantage_disadvantage: "Kelebihan & Kekurangan",
  concept: "Konsep"
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onOptionSelect,
  selectedOptionId,
  showFeedback
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-2xl mx-auto bg-cream border-[3px] border-neo-black p-8 rounded-[24px] shadow-neo-brutal-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="bg-neo-blue text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-neo-black uppercase tracking-wider shadow-neo-brutal">
          {categoryLabels[question.category] || question.category}
        </span>
        <span className="text-sm font-bold text-neo-black/40 uppercase tracking-widest">
          Soal {questionNumber} / {totalQuestions}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-neo-black mb-8 leading-tight">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <OptionButton
            key={option.id}
            index={index}
            option={option}
            isSelected={selectedOptionId === option.id}
            showFeedback={showFeedback}
            onClick={() => onOptionSelect(option.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}
