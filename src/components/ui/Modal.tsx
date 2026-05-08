import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { Button } from "./Button"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-4"
          >
            <div className="overflow-hidden rounded-neo border-[3px] border-neo-black bg-white shadow-neo-brutal-xl">
              <div className="flex items-center justify-between border-b-[3px] border-neo-black px-6 py-4 bg-neo-yellow rounded-t-[17px]">
                <h2 className="text-xl font-bold text-neo-black uppercase">{title}</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 text-neo-black hover:bg-white border-[3px] border-transparent hover:border-neo-black transition-colors"
                >
                  <X className="h-6 w-6 stroke-[3px]" />
                </button>
              </div>
              <div className="p-6 text-neo-black font-medium">
                {children}
              </div>
              <div className="flex justify-end border-t-[3px] border-neo-black px-6 py-4 bg-cream">
                <Button onClick={onClose}>Mengerti</Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
