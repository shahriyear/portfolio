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
      description:
        "Led migration from a legacy monolithic payment platform into modular, independently deployable systems using Clean Architecture and Hexagonal Architecture principles.",
    },
    {
      title: "Transaction Reliability Engineering",
      description:
        "Reduced transaction mismatch rate from 10% to 0.5% and improved transaction consistency using state-machine workflows, idempotency, and transaction revalidation strategies.",
    },
    {
      title: "High-Scale Payment Processing",
      description:
        "Managed backend systems handling approximately 300M BDT monthly transaction volume across 20+ payment gateways serving 1M+ users and 500+ merchants.",
    },
    {
      title: "PCI DSS Compliance Leadership",
      description:
        "Led PCI DSS audit coordination with international QSAs including compliance documentation, pentest remediation, evidence handling, and security discussions.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 mb-4">
              Senior Backend Engineer
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fahim Shahriyear Hossain
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Fintech infrastructure engineer focused on scalable payment
              systems, distributed transaction processing, PCI DSS compliance,
              and reliability-focused backend architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/shahriyear"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:opacity-90 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/shahriyear"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>

            <div className="space-y-5 text-zinc-300">
              <div>
                <p className="text-zinc-500 text-sm mb-1">Experience</p>
                <p className="text-lg">7+ Years</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Transaction Volume</p>
                <p className="text-lg">300M+ BDT Monthly</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Payment Gateways</p>
                <p className="text-lg">20+ Integrations</p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm mb-1">Platform Reliability</p>
                <p className="text-lg">99.99% Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4">About</h2>

          <p className="text-zinc-300 leading-relaxed max-w-4xl">
            I specialize in building and modernizing fintech payment
            infrastructure with a strong focus on scalability, transaction
            reliability, observability, and secure distributed systems. My work
            spans backend architecture, payment gateway integrations, PCI DSS
            compliance coordination, deployment workflows, and production
            reliability engineering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Selected Engineering Impact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-4">Backend & Architecture</h3>
            <p className="text-zinc-300 leading-relaxed">
              PHP, Symfony, Laravel, Node.js, Express.js, Clean Architecture,
              Hexagonal Architecture, REST APIs
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-4">Cloud & DevOps</h3>
            <p className="text-zinc-300 leading-relaxed">
              AWS, Docker, Jenkins, CI/CD, Linux, Deployment Automation,
              Observability, ELK Stack
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Open to Remote Opportunities
          </h2>

          <p className="text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Interested in backend engineering, fintech infrastructure,
            distributed systems, and reliability-focused engineering roles.
          </p>

          <a
            href="mailto:shahriyear@gmail.com"
            className="inline-block px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
