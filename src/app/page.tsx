"use client";
import React from "react";
import { Shield, CheckCircle, Lock, ArrowRight, AlertTriangle, FileText, Sparkles } from "lucide-react";

const navItems = [
  { label: "Why Compliance", href: "#why-compliance" },
  { label: "SOC 2 & HIPAA", href: "#standards" },
  { label: "How It Works", href: "#how-it-works" },
];

function AnimatedShield() {
  return (
    <div className="relative flex items-center justify-center">
      <Shield className="w-16 h-16 text-emerald-600 animate-pulse" />
      <div className="absolute inset-0 rounded-full border-4 border-emerald-200/40 animate-ping" />
      <Lock className="absolute w-6 h-6 text-emerald-700 top-6 left-6 animate-fade-in-up" />
      <CheckCircle className="absolute w-6 h-6 text-emerald-500 bottom-6 right-6 animate-fade-in-up" />
    </div>
  );
}

export default function PrivntLanding() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 px-8 py-6 border-b border-emerald-900/40 bg-black/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-2xl font-bold text-white">
            <img src="/logo.png" alt="Privnt Logo" className="w-8 h-8 object-contain" />
            <span className="tracking-tight">Privnt</span>
          </div>
          <div className="hidden md:flex space-x-8 text-emerald-200 font-medium">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-emerald-400 transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedShield />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mt-8">
            Industry-Grade Trust for Agentic AI
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10">
            Privnt helps you achieve the <span className="text-emerald-400 font-semibold">trust</span>, <span className="text-emerald-400 font-semibold">rigor</span>, and <span className="text-emerald-400 font-semibold">controls</span> of frameworks like SOC 2 & HIPAA—purpose-built for agentic AI. Get the same level of assurance and credibility, tailored for your technology.
          </p>
          <a
            href="https://calendly.com/titalia/coffee-chat-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl shadow-lg hover:bg-emerald-400 transition-colors text-lg group"
          >
            Book a Trust Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Why Compliance Section */}
      <section id="why-compliance" className="relative z-10 px-6 py-20 bg-black/90 border-t border-b border-emerald-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Industry-Grade Trust Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <AlertTriangle className="w-10 h-10 text-orange-400 mb-3" />
              <span className="text-lg font-semibold text-white">Fines & Penalties</span>
              <p className="text-emerald-100 mt-2">Lack of robust controls can result in regulatory fines, lost business, and reputational damage.</p>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="text-lg font-semibold text-white">Due Diligence</span>
              <p className="text-emerald-100 mt-2">Investors and enterprise customers expect SOC 2/HIPAA-level assurance—even for new AI frameworks.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-10 h-10 text-blue-400 mb-3" />
              <span className="text-lg font-semibold text-white">AI Under Scrutiny</span>
              <p className="text-emerald-100 mt-2">AI companies face increasing regulatory attention—industry-grade trust is now a competitive advantage.</p>
            </div>
          </div>
          <div className="text-emerald-300 text-sm mt-6">
            <span className="font-medium">82%</span> of AI startups fail their first trust or compliance review. <span className="font-medium">68%</span> of enterprise deals require SOC 2/HIPAA-level controls.
          </div>
        </div>
      </section>

      {/* SOC 2 & HIPAA Section */}
      <section id="standards" className="relative z-10 px-6 py-20 bg-black/80">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">SOC 2 & HIPAA-Level Assurance for Agentic AI</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-black/70 rounded-2xl p-8 shadow-md border border-emerald-900/40">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-3">SOC 2-Level Controls</h3>
              <p className="text-emerald-100 mb-2">We help you implement security, availability, and privacy controls inspired by SOC 2, adapted for agentic AI. Build trust with enterprise customers and partners.</p>
              <ul className="list-disc ml-6 text-emerald-200">
                <li>Continuous monitoring of controls</li>
                <li>Automated evidence collection</li>
                <li>Audit-ready reporting</li>
              </ul>
            </div>
            <div className="bg-black/70 rounded-2xl p-8 shadow-md border border-emerald-900/40">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-3">HIPAA-Grade Safeguards</h3>
              <p className="text-emerald-100 mb-2">For companies handling sensitive or health-related data, we provide privacy and security frameworks modeled after HIPAA—tailored for modern AI systems.</p>
              <ul className="list-disc ml-6 text-emerald-200">
                <li>PHI-style encryption & access controls</li>
                <li>Incident response & breach notification</li>
                <li>Ongoing compliance training</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-lg text-emerald-200">
            Privnt delivers the trust, rigor, and controls of industry gold standards—customized for agentic AI. Not a certification, but the same level of assurance.
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-black/90 border-t border-emerald-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How Privnt Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Lock className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="font-semibold text-white">1. Assessment</span>
              <p className="text-emerald-100 mt-2">We evaluate your current compliance posture and identify gaps.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="font-semibold text-white">2. Automated Controls</span>
              <p className="text-emerald-100 mt-2">Privnt implements and monitors technical and organizational controls.</p>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="font-semibold text-white">3. Continuous Monitoring</span>
              <p className="text-emerald-100 mt-2">Real-time dashboards and alerts keep you always audit-ready.</p>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="font-semibold text-white">4. Audit-Ready Reports</span>
              <p className="text-emerald-100 mt-2">Generate SOC 2 & HIPAA reports for customers, partners, and regulators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Animation Section */}
      <section className="relative z-10 px-6 py-20 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <AnimatedShield />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Built for Trust. Designed for Security.</h3>
          <p className="text-lg text-emerald-100 mb-2">Privnt is trusted by leading AI companies to safeguard data, ensure compliance, and accelerate growth.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-emerald-900/40 bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center text-emerald-200">
          <p className="mb-2">&copy; 2025 Privnt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}