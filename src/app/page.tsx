"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import { ArrowRight, Shield, Zap, Target, AlertTriangle, TrendingUp, Users, Clock, DollarSign, Sparkles, CheckCircle } from 'lucide-react';

export default function SuperchargedLandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const InteractiveButton = ({ children, onClick, variant = "primary", size = "default" }: {
    children: ReactNode;
    onClick?: () => void;
    variant?: string;
    size?: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const newRipple = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        id: Date.now()
      };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
      onClick?.();
    };

    const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl";
    const variantClasses = variant === "primary" 
      ? "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white hover:from-emerald-600 hover:via-green-600 hover:to-teal-600" 
      : "bg-white/10 backdrop-blur-lg border border-emerald-200/30 text-emerald-700 hover:bg-white/20";
    const sizeClasses = size === "large" ? "px-12 py-4 text-lg rounded-xl" : "px-8 py-3 rounded-lg";

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <span className="relative z-10 flex items-center justify-center space-x-2">
          {children}
        </span>
        
        {/* Ripple effects */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none animate-ping"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
        
        {/* Hover glow */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-lg animate-pulse" />
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-green-50/50 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-teal-300/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ 
            transform: `translateY(${-scrollY * 0.1}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-green-200/10 to-emerald-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ 
            transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)`,
            animationDelay: '2s'
          }}
        />
        <FloatingParticles />
      </div>

      {/* Enhanced Header with glassmorphism */}
      <header className="relative z-10 px-8 py-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-3xl font-bold text-slate-800 group">
            <span className="tracking-tight bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              Privnt
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-slate-600">
            {['Features', 'Your Challenges', 'How We Help'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="relative py-2 px-4 hover:text-emerald-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Supercharged Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-lg border border-emerald-200/50 rounded-full text-emerald-700 text-sm mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="relative">
              <AlertTriangle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
            </div>
            <span className="font-medium">89% of AI startups lack dedicated compliance staff</span>
            <Sparkles className="w-4 h-4 ml-2 text-emerald-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-8 leading-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Your AI Startup&apos;s
            </span>
            <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default" style={{ animationDelay: '0.3s' }}>
              Legal Co-Pilot
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Navigate complex AI & data privacy regulations with automated compliance. 
            <span className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors cursor-default"> Stay focused on building</span> while we handle the legal complexity.
          </p>

          {/* Enhanced stat cards with hover effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "7.2 months", label: "Average delay identifying regulations", color: "emerald", delay: "0.7s" },
              { icon: DollarSign, value: "30%", label: "Engineering resources on compliance", color: "green", delay: "0.9s" },
              { icon: TrendingUp, value: "7%", label: "Global revenue penalties (EU AI Act)", color: "teal", delay: "1.1s" }
            ].map((stat) => (
              <div 
                key={stat.value}
                className="group bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:-rotate-2 shadow-lg hover:shadow-2xl cursor-pointer animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative">
                  <stat.icon className={`w-10 h-10 text-${stat.color}-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce`} />
                  <div className={`absolute inset-0 bg-${stat.color}-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-xl`} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <div className="flex justify-center">
              <InteractiveButton
                onClick={() => window.open('https://calendly.com/titalia/coffee-chat-1', '_blank')}
                size="large"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </InteractiveButton>
            </div>
            <p className="text-slate-500 text-sm flex items-center justify-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Join 500+ AI startups preparing for compliance-ready growth</span>
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Problem Section */}
      <section id="your-challenges" className="relative z-10 px-6 py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-12 animate-fade-in-up">
            The Regulatory Nightmare
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200/50 rounded-2xl p-8 text-left hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="relative mb-6">
                <AlertTriangle className="w-12 h-12 text-red-500 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-red-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                Regulatory Blind Spots
              </h3>
              <ul className="text-slate-600 space-y-3 group-hover:text-slate-700 transition-colors duration-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span>150+ global AI regulations to track</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span>CCPA, EU AI Act, GDPR compliance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span>Manual documentation consuming 30% of eng resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span>62% fail first investor due diligence</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200/50 rounded-2xl p-8 text-left hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="relative mb-6">
                <DollarSign className="w-12 h-12 text-orange-500 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Hidden Costs
              </h3>
              <ul className="text-slate-600 space-y-3 group-hover:text-slate-700 transition-colors duration-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span>Penalties up to 7% of global revenue</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span>Average $1.2M audit penalties</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span>4.7x more expensive to fix retroactively</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span>6-9 month delays in enterprise sales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supercharged Solution Section */}
      <section id="how-we-help" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
              Compliance on Autopilot
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              AI-powered regulatory intelligence that turns complex compliance into automated workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Regulatory Radar",
                description: "Real-time tracking of 150+ global regulations with custom alerts for your AI use cases",
                tags: "EU AI Act • CCPA • GDPR • NYC LL144",
                color: "emerald",
                delay: "0.4s"
              },
              {
                icon: Zap,
                title: "Compliance Autopilot",
                description: "Automated documentation generation, bias audit reports, and CI/CD integration",
                tags: "Model Cards • Risk Assessments • Audit Trails",
                color: "green",
                delay: "0.6s"
              },
              {
                icon: Target,
                title: "Investor Ready",
                description: "Automated compliance sections for pitch decks and simulated regulator Q&A",
                tags: "Due Diligence • Risk Scoring • Penalty Projections",
                color: "teal",
                delay: "0.8s"
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="group bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative mb-6">
                  <feature.icon className={`w-12 h-12 text-${feature.color}-500 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce`} />
                  <div className={`absolute inset-0 bg-${feature.color}-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 blur-xl`} />
                </div>
                <h3 className={`text-xl font-semibold text-slate-800 mb-4 group-hover:text-${feature.color}-600 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className={`text-sm text-${feature.color}-600 font-medium bg-${feature.color}-50 px-3 py-1 rounded-full inline-block group-hover:bg-${feature.color}-100 transition-colors duration-300`}>
                  {feature.tags}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-emerald-50/50 to-green-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Users className="w-8 h-8 text-emerald-500 animate-pulse" />
            <span className="text-2xl font-semibold text-slate-800">Trusted by forward-thinking startups</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "90%", label: "Reduction in manual compliance work", color: "emerald" },
              { value: "6-9 months", label: "Faster enterprise sales cycles", color: "green" },
              { value: "$150k", label: "vs $1.2M average audit penalties", color: "teal" }
            ].map((stat) => (
              <div key={stat.value} className="group">
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final supercharged CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Ready to Transform Your Compliance?
          </h2>
          <p className="text-xl text-slate-600 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Schedule a demo to see how we can help you turn regulatory complexity into competitive advantage.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <InteractiveButton
              onClick={() => window.open('https://calendly.com/titalia/coffee-chat-1', '_blank')}
              size="large"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </InteractiveButton>
          </div>
          
          <p className="text-slate-500 text-sm mt-6 flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>15-minute consultation • No commitment required</span>
          </p>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-emerald-200/30 bg-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-slate-600">
          <p>&copy; 2025 Privnt. Turning regulatory complexity into competitive advantage.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}