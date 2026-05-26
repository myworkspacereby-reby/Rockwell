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

// @ts-ignore
import logoImg from './rockwell_logo_white_1779096188911.png';
// @ts-ignore
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
      className={`glass-card relative overflow-hidden flex flex-col h-full group ${featured ? 'ring-2 ring-gold border-gold/40' : 'border-white/10'}`}
    >
      <div className="mb-6">
        <h3 className="font-syne font-bold text-xl mb-4 group-hover:text-gold transition-colors">{title}</h3>
        <div className="flex flex-col mb-4">
          <span className="text-4xl font-syne font-extrabold text-gold tracking-tight">{price}</span>
          <span className="text-[#A3B1C6]/70 text-[10px] font-extrabold uppercase tracking-widest mt-1">{period}</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] font-bold tracking-widest text-[#A3B1C6] uppercase">
          <Clock className="w-3.5 h-3.5 text-[#A3B1C6]" />
          {time}
        </div>
      </div>

      <div className="h-px bg-white/10 w-full mb-6" />

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-[#A3B1C6] leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href="#contact" 
        className={`w-full py-4 rounded-xl font-syne font-bold text-xs tracking-[2px] uppercase transition-all flex items-center justify-center ${featured ? 'bg-gold text-bg-edge hover:shadow-[0_0_35px_rgba(230,185,98,0.6)] font-extrabold' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'}`}
      >
        Choose This Workflow
      </a>
    </motion.div>
  </div>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      type: "ADJUSTABLE PACKAGES",
      question: "Can we adjust the workflow packages based on my budget?",
      badge: "CLARIFY",
      answer: "Yes, we can customize a system that fits your specific needs and budget. We will focus on the highest impact features for your growth."
    },
    {
      id: 2,
      type: "TOOLS COST",
      question: "Do I need to pay for my own tool subscriptions?",
      badge: "CLARIFY",
      answer: "You will maintain your own active subscriptions for core tools like GHL or Midjourney. I handle the professional setup and management for you."
    },
    {
      id: 3,
      type: "EXPECTED RESULTS",
      question: "How soon will I see results from the automated workflows?",
      badge: "RESULTS",
      answer: "Many systems show immediate efficiency gains. Significant growth in social media presence usually builds steadily over 2-3 months."
    },
    {
      id: 4,
      type: "MONTHLY REPORTS",
      question: "How detailed is the monthly reporting?",
      badge: "PROGRESS",
      answer: "You receive a clear, easy-to-read report showing your key performance numbers, plus a simple summary of what worked and what we will adjust."
    },
    {
      id: 5,
      type: "EXTRA HOURS",
      question: "What happens if we need more hours outside of my chosen package?",
      badge: "SERVICES",
      answer: "For extra hours or new features outside your initial plan, we can move you to a higher tier or discuss a simple project-based addition."
    }
  ];

  const packages = [
    {
      title: "Social Content System",
      price: "$550",
      period: "MONTHLY RETAINER",
      time: "20 hours / mo",
      features: [
        "Full Social Media Management",
        "3-4 highly engaging posts per week",
        "Automated DM and comment replies",
        "Comprehensive Monthly Performance Reporting"
      ]
    },
    {
      title: "GHL Foundation",
      price: "$600",
      period: "MONTHLY RETAINER",
      time: "25 hours / mo",
      badge: "POPULAR",
      features: [
        "Full Social Media Management",
        "Custom GoHighLevel CRM setup",
        "Advanced email automation workflows",
        "Comprehensive Monthly Performance Reporting"
      ]
    },
    {
      title: "Growth Accelerator",
      price: "$800",
      period: "MONTHLY RETAINER",
      time: "30 hours / mo",
      features: [
        "Advanced Social Media Management",
        "Everything included in the Foundation tier",
        "10 custom premium AI-designed assets",
        "Comprehensive Monthly Performance Reporting"
      ]
    },
    {
      title: "Revenue Engine",
      price: "$1,250",
      period: "MONTHLY RETAINER",
      time: "40 hours / mo",
      featured: true,
      badge: "MOST POPULAR",
      features: [
        "Priority Day-to-Day Social Media Management",
        "Full GoHighLevel system optimization",
        "Automated Lead Finding infrastructure (Apollo)",
        "Premium AI video content production",
        "Deep-Dive Monthly Performance Analytics & Reporting"
      ]
    }
  ];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/myworkspace.reby@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || 'New Contact from Portfolio',
          message: formState.message,
          _subject: `New Lead: ${formState.name} - ${formState.subject}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
