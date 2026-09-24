import { ArrowUpRight, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full border-t border-slate-800/60 bg-slate-950 px-6 py-20 text-slate-100 sm:px-12"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-sky-400">03. CONTACT</p>
        <h2 className="text-3xl font-medium text-white">Let&apos;s build something secure.</h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          Interested in web development, cybersecurity, or a technical collaboration? Reach out and let&apos;s talk.
        </p>
        <a
          href="mailto:yohanes.sampurno@example.com"
          className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-sky-400"
        >
          <Mail className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-400" />
          <span>Email me</span>
          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-400" />
        </a>
      </div>
    </section>
  );
}
