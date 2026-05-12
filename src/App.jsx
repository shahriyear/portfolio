import { motion } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  Mail,
  Activity,
  ShieldCheck,
  Server,
  Layers3,
} from "lucide-react";

export default function Portfolio() {
  const skills = [
    "Fintech Infrastructure",
    "Payment Systems",
    "Distributed Systems",
    "PCI DSS",
    "Reliability Engineering",
    "Symfony",
    "Node.js",
    "AWS",
    "Docker",
    "RabbitMQ",
    "ELK Stack",
    "React",
  ];

  const achievements = [
    {
      title: "Payment Infrastructure Modernization",
      icon: Layers3,
      description:
        "Led migration from a legacy monolithic payment platform into modular, independently deployable systems using Clean Architecture and Hexagonal Architecture principles.",
    },
    {
      title: "Transaction Reliability Engineering",
      icon: Activity,
      description:
        "Reduced transaction mismatch rate from 10% to 0.5% using state-machine workflows, idempotency, and transaction revalidation strategies.",
    },
    {
      title: "High-Scale Payment Processing",
      icon: Server,
      description:
        "Managed backend systems handling approximately 300M BDT monthly transaction volume across 20+ payment gateways.",
    },
    {
      title: "PCI DSS Compliance Leadership",
      icon: ShieldCheck,
      description:
        "Led PCI DSS audit coordination with international QSAs including compliance documentation and pentest remediation.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]"></div>

      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-sm text-zinc-300 mb-6 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Open to Remote Opportunities
            </div>

            <p className="text-sm tracking-[0.35em] uppercase text-zinc-500 mb-5">
              Senior Backend Engineer
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Fahim Shahriyear Hossain
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              Fintech infrastructure engineer specializing in scalable payment
              systems, distributed transaction processing, PCI DSS compliance,
              and reliability-focused backend architecture.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://linkedin.com/in/shahriyear"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
              >
                <ExternalLink className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/shahriyear"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                <GitBranch className="w-5 h-5" />
                GitHub
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
              <div>
                <p className="text-3xl font-bold">7+</p>
                <p className="text-zinc-500 text-sm mt-1">Years</p>
              </div>

              <div>
                <p className="text-3xl font-bold">20+</p>
                <p className="text-zinc-500 text-sm mt-1">Gateways</p>
              </div>

              <div>
                <p className="text-3xl font-bold">99.99%</p>
                <p className="text-zinc-500 text-sm mt-1">Uptime</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-[2rem] p-10 shadow-2xl shadow-black/40"
          >
            <h2 className="text-2xl font-bold mb-8">Engineering Snapshot</h2>

            <div className="space-y-6 text-zinc-300">
              <div>
                <p className="text-zinc-500 text-sm mb-1">Transaction Volume</p>
                <p className="text-xl font-semibold">300M+ BDT Monthly</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">
                  Infrastructure Scale
                </p>
                <p className="text-xl font-semibold">20+ Payment Gateways</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Reliability</p>
                <p className="text-xl font-semibold">99.99% Platform Uptime</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Core Focus</p>
                <p className="text-xl font-semibold">
                  Fintech Infrastructure & Reliability Engineering
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About</h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            I specialize in building and modernizing fintech payment
            infrastructure with strong focus on scalability, transaction
            reliability, observability, and secure distributed systems. My work
            spans backend architecture, payment gateway integrations, PCI DSS
            compliance coordination, deployment workflows, and production
            reliability engineering.
          </p>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 backdrop-blur"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-10">
          Selected Engineering Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-[2rem] p-8 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-zinc-800 border border-zinc-700">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4">
              Backend & Architecture
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              PHP, Symfony, Laravel, Node.js, Express.js, Clean Architecture,
              Hexagonal Architecture, REST APIs
            </p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-[2rem] p-8">
            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>

            <p className="text-zinc-300 leading-relaxed">
              AWS, Docker, Jenkins, CI/CD, Linux, Deployment Automation, ELK
              Stack, Kibana, Observability & Monitoring
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[2rem] p-14 text-center shadow-2xl shadow-black/40">
          <h2 className="text-4xl font-black mb-5">
            Open to Remote Opportunities
          </h2>

          <p className="text-zinc-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Interested in backend engineering, fintech infrastructure,
            distributed systems, and reliability-focused engineering roles.
          </p>

          <div className="space-y-6">
            <div className="text-2xl font-mono text-white">
              shahriyear@gmail.com
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 justify-center">
                <a
                  href="mailto:shahriyear@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText('shahriyear@gmail.com')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-zinc-700 text-white font-semibold hover:border-zinc-500 transition"
                >
                  Copy Email
                </button>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1ajbbIRW-EzpDVO1YrTWyaP3lCsjU_-cx/view?usp=sharing"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-700 text-white font-semibold hover:border-zinc-500 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  Download CV
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Il6KhRQwViGx7YIvrWxK9t57dmpT1MUl/view?usp=sharing"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-700 text-white font-semibold hover:border-zinc-500 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  Download Cover Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
