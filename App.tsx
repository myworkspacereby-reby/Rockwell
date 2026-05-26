import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  CheckCircle2, 
  Layout, 
  Calendar,
  Mail,
  Smartphone,
  ArrowRight,
  Clock
} from 'lucide-react';

// Explicitly importing images so Vite bundles them for production
import logoImg from './rockwell_logo_white_1779096188911.png';
import heroBg from './hero_workspace_background_1779091807771.png';

const BackgroundGlow = () => (
  <div className="fixed inset-0 overflow-hidden -z-10 bg-bg-edge">
    <motion.div 
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="glow-orb w-[500px] h-[500px] bg-gold top-[-10%] left-[-10%]"
    />
    <motion.div 
      animate={{
        x: [0, -80, 0],
        y: [0, 120, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="glow-orb w-[600px] h-[600px] bg-white/10 bottom-[-20%] right-[-10%]"
    />
    <motion.div 
      animate={{
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="glow-orb w-[400px] h-[400px] bg-white top-[30%] left-[40%] blur-[150px]"
    />
  </div>
);

interface FAQProps {
  id: number;
  type: string;
  question: string;
  badge: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQBox: FC<FAQProps> = ({ type, question, badge, answer, isOpen, onToggle }) => (
  <div className="mb-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-colors hover:border-gold/30 hover:bg-white/10">
    <button 
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-hidden"
    >
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-syne font-bold tracking-[3px] text-gold uppercase">QUESTION — {type}</span>
        <h3 className="font-syne font-bold text-white text-xl tracking-tight leading-snug">{question}</h3>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline-block px-3 py-1 rounded-sm silver-gradient text-bg-edge text-[10px] font-bold tracking-[2px] uppercase shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {badge}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="p-6 pt-0 border-t border-white/5 bg-black/20">
            <p className="text-[#A3B1C6] text-sm font-sans leading-relaxed pt-4">
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface PackageProps {
  title: string;
  price: string;
  period: string;
  time: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const PackageCard: FC<PackageProps> = ({ title, price, period, time, features, featured, badge }) => (
  <div className="relative h-full pt-4">
    {badge && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-syne font-extrabold tracking-widest uppercase py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10 whitespace-nowrap">
        {badge}
      </div>
    )}
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
