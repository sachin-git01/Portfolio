import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { contactEmail, socials } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

const formAction = import.meta.env.VITE_FORMSPREE_ENDPOINT || `mailto:${contactEmail}`;

export default function Contact() {
  const handleSubmit = (event) => {
    if (import.meta.env.VITE_FORMSPREE_ENDPOINT) return;

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s Build Something Amazing Together"
          copy="Reach out for internships, full stack projects, collaboration, or recruiter conversations."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-[1.8rem] p-6"
          >
            <h3 className="font-display text-2xl font-bold">Connect channels</h3>
            <p className="mt-3 leading-7 text-white/66 light:text-[#30415f]">
              Prefer direct links? Pick a platform and I’ll meet you there.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="focus-ring flex items-center gap-4 rounded-2xl border border-white/12 bg-white/8 p-4 font-bold transition hover:-translate-y-1 hover:border-cyan/50 light:bg-white/60"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl text-2xl" style={{ color: item.color, background: `${item.color}18` }}>
                      <Icon />
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 }}
            className="glass rounded-[1.8rem] p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white/72 light:text-[#30415f]">
                Name
                <input
                  required
                  name="name"
                  className="focus-ring rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan/70 light:bg-white/70 light:text-[#091223]"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white/72 light:text-[#30415f]">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="focus-ring rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan/70 light:bg-white/70 light:text-[#091223]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-white/72 light:text-[#30415f]">
              Message
              <textarea
                required
                name="message"
                rows="7"
                className="focus-ring resize-none rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan/70 light:bg-white/70 light:text-[#091223]"
                placeholder="Tell me about the opportunity or project..."
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-plasma to-coral px-7 py-3 font-bold text-white shadow-neon"
            >
              Send Message <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
