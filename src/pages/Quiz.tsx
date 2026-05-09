import { useState, useEffect } from "react";
import { 
  QuizSession, 
  getRandomQuestions, 
  calculateScore, 
  QuizQuestion 
} from "../utils/quizData";
import QuizProgress from "../components/quiz/QuizProgress";
import QuestionCard from "../components/quiz/QuestionCard";
import FeedbackCard from "../components/quiz/FeedbackCard";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Quiz() {
  const navigate = useNavigate();
  const [session, setSession] = useState<QuizSession | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize quiz
  useEffect(() => {
    try {
      startNewQuiz();
    } catch (err) {
      setError("Gagal memuat kuis. Silakan coba lagi.");
      console.error(err);
    }
  }, []);

  const startNewQuiz = () => {
    const questions = getRandomQuestions(4);
    if (questions.length === 0) {
      throw new Error("Tidak ada soal tersedia");
    }
    setSession({
      questions,
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false,
    });
    setSelectedOptionId(null);
    setShowFeedback(false);
    setError(null);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream p-4">
        <div className="bg-white border-[4px] border-neo-black p-8 rounded-[24px] shadow-neo-brutal text-center max-w-md">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">{error}</h2>
          <Button onClick={startNewQuiz} variant="default" className="bg-neo-blue text-white">
            Coba Lagi
          </Button>
        </div>
      </div>
    );
  }

  if (!session) return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-2xl font-bold animate-pulse uppercase tracking-widest">
        Memuat Kuis...
      </div>
    </div>
  );

  const currentQuestion = session.questions[session.currentQuestionIndex];
  if (!currentQuestion) {
    setError("Terjadi kesalahan saat memuat soal.");
    return null;
  }
  const score = calculateScore(session.answers);
  const isLastQuestion = session.currentQuestionIndex === session.questions.length - 1;

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return;

    const option = currentQuestion.options.find(o => o.id === optionId);
    if (!option) return;

    setSelectedOptionId(optionId);
    setShowFeedback(true);

    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      isCorrect: option.isCorrect,
      timestamp: Date.now(),
    };

    setSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        answers: [...prev.answers, newAnswer],
      };
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setSession(prev => {
        if (!prev) return null;
        return { ...prev, isCompleted: true };
      });
    } else {
      setSession(prev => {
        if (!prev) return null;
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        };
      });
      setSelectedOptionId(null);
      setShowFeedback(false);
    }
  };

  if (session.isCompleted) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white border-[4px] border-neo-black p-12 rounded-[32px] shadow-neo-brutal-xl mb-8"
          >
            <div className="w-24 h-24 bg-neo-yellow border-[3px] border-neo-black rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-neo-brutal">
              🎓
            </div>
            <h1 className="text-4xl font-bold text-neo-black mb-2 uppercase">Kuis Selesai!</h1>
            <p className="text-xl font-medium text-neo-black/60 mb-8">
              Kamu telah menyelesaikan kuis algoritma Greedy.
            </p>

            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="text-sm font-bold uppercase tracking-widest text-neo-black/40">Skor Akhir Kamu</div>
              <div className="text-5xl sm:text-7xl font-black text-neo-black flex items-baseline gap-2">
                {score} <span className="text-2xl sm:text-3xl text-neo-black/30">/ 100</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                onClick={startNewQuiz}
                variant="default" 
                className="w-full bg-neo-blue text-white"
              >
                Mulai Kuis Lagi
              </Button>
              <Button 
                onClick={() => navigate('/demo')}
                variant="outline" 
                className="w-full"
              >
                Lihat Demo Lagi
              </Button>
              <Button 
                onClick={() => navigate('/')}
                variant="ghost" 
                className="w-full md:col-span-2"
              >
                Kembali ke Beranda
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neo-black uppercase tracking-tight mb-4">
            Greedy Algorithm Quiz
          </h1>
          <p className="text-base sm:text-lg font-bold text-neo-black/60 max-w-xl mx-auto uppercase">
            Uji pemahamanmu tentang Coin Change Problem dan Algoritma Greedy
          </p>
        </div>

        <QuizProgress 
          currentQuestion={session.currentQuestionIndex + 1}
          totalQuestions={session.questions.length}
          score={score}
          isCompleted={session.isCompleted}
        />

        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            questionNumber={session.currentQuestionIndex + 1}
            totalQuestions={session.questions.length}
            onOptionSelect={handleOptionSelect}
            selectedOptionId={selectedOptionId}
            showFeedback={showFeedback}
          />
        </AnimatePresence>

        <AnimatePresence>
          {showFeedback && (
            <FeedbackCard
              isCorrect={currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect || false}
              explanation={currentQuestion.explanation}
              onNext={handleNext}
              isLastQuestion={isLastQuestion}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
