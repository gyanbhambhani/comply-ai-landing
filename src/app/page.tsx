"use client";
import React from 'react';
import { ArrowRight, Shield, Zap, Target, AlertTriangle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ComplyAI</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#problem" className="hover:text-white transition-colors">Your Challenges</a>
            <a href="#solution" className="hover:text-white transition-colors">How We Help</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-8 animate-fade-in">
            <AlertTriangle className="w-4 h-4 mr-2" />
            89% of AI startups lack dedicated compliance staff
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your AI Startup&apos;s
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Legal Co-Pilot
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Navigate complex AI & data privacy regulations with automated compliance. 
            <span className="text-purple-400 font-semibold"> Stay focused on building</span> while we handle the legal complexity.
          </p>

          {/* Key stat cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">7.2 months</div>
              <div className="text-gray-400 text-sm">Average delay identifying regulations</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">30%</div>
              <div className="text-gray-400 text-sm">Engineering resources on compliance</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">7%</div>
              <div className="text-gray-400 text-sm">Global revenue penalties (EU AI Act)</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <button
                onClick={() => window.open('https://calendly.com/titalia/coffee-chat-1', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-400 text-sm">Join 500+ AI startups preparing for compliance-ready growth</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative z-10 px-6 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">The Regulatory Nightmare</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 text-left">
              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Regulatory Blind Spots</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 150+ global AI regulations to track</li>
                <li>• CCPA, EU AI Act, GDPR compliance</li>
                <li>• Manual documentation consuming 30% of eng resources</li>
                <li>• 62% fail first investor due diligence</li>
              </ul>
            </div>
            
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-8 text-left">
              <DollarSign className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Hidden Costs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Penalties up to 7% of global revenue</li>
                <li>• Average $1.2M audit penalties</li>
                <li>• 4.7x more expensive to fix retroactively</li>
                <li>• 6-9 month delays in enterprise sales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Compliance on Autopilot</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered regulatory intelligence that turns complex compliance into automated workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Shield className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Regulatory Radar</h3>
              <p className="text-gray-300 mb-4">Real-time tracking of 150+ global regulations with custom alerts for your AI use cases</p>
              <div className="text-sm text-purple-300">
                EU AI Act • CCPA • GDPR • NYC LL144
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Zap className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Autopilot</h3>
              <p className="text-gray-300 mb-4">Automated documentation generation, bias audit reports, and CI/CD integration</p>
              <div className="text-sm text-blue-300">
                Model Cards • Risk Assessments • Audit Trails
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Target className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Investor Ready</h3>
              <p className="text-gray-300 mb-4">Automated compliance sections for pitch decks and simulated regulator Q&A</p>
              <div className="text-sm text-green-300">
                Due Diligence • Risk Scoring • Penalty Projections
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Users className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-semibold text-white">Trusted by forward-thinking startups</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Reduction in manual compliance work</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">6-9 months</div>
              <div className="text-gray-300">Faster enterprise sales cycles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$150k</div>
              <div className="text-gray-300">vs $1.2M average audit penalties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Compliance?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Schedule a demo to see how we can help you turn regulatory complexity into competitive advantage.
          </p>
          
          <button 
            onClick={() => window.open('https://calendly.com/titalia/coffee-chat-1', '_blank')}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Book a Demo
          </button>
          
          <p className="text-gray-400 text-sm mt-6">15-minute consultation • No commitment required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 AutoComply. Turning regulatory complexity into competitive advantage.</p>
        </div>
      </footer>
    </div>
  );
}