import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  CheckCircle2, 
  Target, 
  Zap, 
  ShieldCheck, 
  Layout, 
  TrendingUp, 
  Calendar,
  Mail,
  Smartphone,
  ArrowRight,
  Clock
} from 'lucide-react';

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
      price: "$700",
      period: "ONE-TIME BUILD",
      time: "3 days",
      features: [
        "Full Social Media Management",
        "3-4 posts per week",
        "Automated DM and comment replies",
        "Monthly Performance Reporting"
      ]
    },
    {
      title: "GHL Foundation",
      price: "$900",
      period: "ONE-TIME BUILD",
      time: "1 week",
      badge: "NEW",
      features: [
        "Full Social Media Management",
        "GHL CRM setup",
        "Email automation workflows",
        "Monthly Performance Reporting"
      ]
    },
    {
      title: "Growth Accelerator",
      price: "$1,250",
      period: "ONE-TIME BUILD",
      time: "1-2 weeks",
      features: [
        "Advanced Social Media Management",
        "Everything in Foundation box",
        "10 custom AI-designed images",
        "Monthly Performance Reporting"
      ]
    },
    {
      title: "Revenue Engine",
      price: "$1,750",
      period: "ONE-TIME BUILD",
      time: "1-2 weeks",
      featured: true,
      features: [
        "Priority Social Media Management",
        "Full GHL system management",
        "Automated Lead Finding",
        "AI video content creation",
        "Detailed Monthly Performance Reporting"
      ]
    },
    {
      title: "Website Launch",
      price: "$2,000",
      period: "ONE-TIME BUILD",
      time: "1+ weeks",
      featured: true,
      features: [
        "5-7 GHL landing pages",
        "Contact forms",
        "Lead magnet integration",
        "Booking functionality",
        "Email capture setup",
        "Social platform integration (IG, FB, TikTok)"
      ]
    },
    {
      title: "Complete Growth Stack",
      price: "$2,500",
      period: "ONE-TIME BUILD",
      time: "2 weeks",
      featured: true,
      features: [
        "5-7 custom GHL pages",
        "Full GHL CRM setup",
        "Automation workflows",
        "Forms & lead magnets",
        "Email sequences",
        "Social integration (IG, FB, TikTok)"
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
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <span className="font-syne font-bold text-xl tracking-[4px] text-white transition-opacity hover:opacity-80">ROCKWELL</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[10px] font-syne font-bold tracking-[4px] uppercase text-white/60 hover:text-gold transition-colors">Home</a>
            <a href="#packages" className="text-[10px] font-syne font-bold tracking-[4px] uppercase text-white/60 hover:text-gold transition-colors">Workflows</a>
            <a href="#faq" className="text-[10px] font-syne font-bold tracking-[4px] uppercase text-white/60 hover:text-gold transition-colors">FAQ</a>
            <a href="#contact" className="px-6 py-2 border border-gold/30 text-gold text-[10px] font-syne font-bold tracking-[4px] uppercase rounded-full hover:bg-gold hover:text-bg-edge transition-all">Connect</a>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 pt-24">
      {/* Hero Section / The Story */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center mb-24 rounded-[40px] overflow-hidden"
        id="home"
      >
        <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center mb-12">
              <span className="font-syne font-bold text-2xl tracking-[6px] text-gold border border-gold px-6 py-2 rounded-full">ROCKWELL</span>
            </div>
            <h1 className="font-syne font-extrabold text-5xl md:text-[90px] mb-8 leading-[0.9] tracking-tighter uppercase text-white drop-shadow-2xl">
              AUTOMATE YOUR<br />
              GROWTH.<br />
              RECLAIM YOUR <span className="gold-text-glow italic">TIME.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-sans font-medium leading-relaxed mb-12 drop-shadow-md">
              I build professional AI systems that handle your social media and workflows <span className="text-gold font-bold">24/7</span>, so you can stop doing manual work and focus on scaling your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://calendly.com/myworkspace-reby/client-discovery-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-12 py-5 bg-gold text-bg-edge font-syne font-extrabold rounded-full tracking-widest uppercase hover:shadow-[0_0_40px_rgba(230,185,98,0.6)] transition-all transform hover:scale-105 inline-block text-sm"
              >
                Book Discovery Call
              </a>
              <a 
                href="#packages" 
                className="px-12 py-5 border-2 border-white/20 bg-bg-edge/40 backdrop-blur-md text-white font-syne font-bold rounded-full tracking-widest uppercase hover:bg-white/10 transition-all text-sm"
              >
                See Workflows
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <section className="mb-32 scroll-mt-24" id="packages">
        <div className="text-center mb-16 px-4">
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl uppercase tracking-wider mb-4 text-white">High Performance Execution Tiers</h2>
          <p className="text-[#A3B1C6] text-lg max-w-2xl mx-auto font-light leading-relaxed">Choose the system that fits your growth stage</p>
          <div className="h-px w-24 bg-gold mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} {...pkg} />
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-32 scroll-mt-24"
        id="faq"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-linear-to-r from-transparent via-gold to-gold flex-1" />
          <h2 className="font-syne font-bold text-2xl uppercase tracking-[6px] flex items-center gap-4">
            <Layout className="w-6 h-6 text-gold" />
            Frequently Asked Questions
          </h2>
          <div className="h-px bg-linear-to-r from-gold via-gold to-transparent flex-1" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQBox
              key={faq.id}
              isOpen={openFaq === faq.id}
              onToggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              {...faq}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 opacity-60 font-sans italic text-xl md:text-2xl text-[#A3B1C6] max-w-2xl mx-auto px-6">
          'Clarity is the first step toward efficiency.'
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="relative py-24 mb-12" id="contact">
        <div className="absolute inset-0 bg-white/5 rounded-[40px] border border-white/10 -z-10 shadow-[0_0_50px_rgba(255,255,255,0.02)]" />
        <div className="px-6">
          <div className="text-center mb-16">
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl mb-6">Ready to Automate?</h2>
            <p className="text-[#A3B1C6] text-lg max-w-2xl mx-auto font-light">
              Let's discuss your backend architecture and how AI can reclaim 20+ hours of your week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe" 
                      className="form-input"
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com" 
                      className="form-input"
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    placeholder="Project Inquiry" 
                    className="form-input"
                    value={formState.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    placeholder="Tell me about your current bottlenecks..." 
                    className="form-input resize-none"
                    value={formState.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    Message sent successfully! Reby will contact you shortly.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    Something went wrong. Please try again or contact me directly via email.
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gold text-bg-edge font-syne font-extrabold rounded-xl tracking-widest uppercase transition-all transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(230,185,98,0.4)] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </motion.div>

            {/* Alternative Contact & Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="glass-card bg-gold/5 border-gold/20 p-8">
                  <h3 className="font-syne font-bold text-xl text-gold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Prefer a call?
                  </h3>
                  <p className="text-[#A3B1C6] text-sm mb-6 leading-relaxed">
                    Skip the form and book a 15-minute strategy call directly to see if we're a good fit.
                  </p>
                  <a 
                    href="https://calendly.com/myworkspace-reby/client-discovery-call" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-syne font-bold rounded-xl tracking-widest uppercase transition-all"
                  >
                    Schedule on Calendly
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all group cursor-pointer overflow-hidden">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-syne font-bold tracking-widest uppercase text-[#A3B1C6]">Email</span>
                      <span className="text-sm font-medium break-all block">myworkspace.reby@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all group cursor-pointer overflow-hidden">
                    <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:scale-110 transition-transform shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-syne font-bold tracking-widest uppercase text-[#A3B1C6]">WhatsApp</span>
                      <span className="text-sm font-medium break-all block">+63 998 287 6037</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border-l-2 border-gold/30 bg-gold/5 rounded-r-2xl italic text-[#A3B1C6] text-sm leading-relaxed">
                "I am dedicated to saving your business from manual burnout and making sure that your investment in automation is worth every cent."
                <span className="block mt-2 font-bold text-gold not-italic uppercase tracking-widest text-[10px]"> — REBY</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 border-t border-white/5 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-white italic mb-16 leading-tight tracking-tight max-w-4xl mx-auto"
        >
          'Focus on your vision. <br className="hidden md:block" />
          <span className="gold-text italic">Let the systems handle the rest.</span>'
        </motion.p>
        <div className="flex items-center justify-center gap-2 text-[10px] font-syne font-bold tracking-[8px] uppercase opacity-30 text-gold mb-4">
          <CheckCircle2 className="w-3 h-3" />
          High Performance Systems Architect
        </div>
        <p className="text-[9px] uppercase tracking-[4px] opacity-20">
          © 2026 Rockwell
        </p>
      </footer>
    </div>
  </div>
);
}
