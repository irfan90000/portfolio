import Link from "next/link";
import { ArrowRightIcon } from "../Icons";

export default function CtaBanner() {
  return (
    <section className="bg-slate-950 py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Do you have a Project Idea?
          <br />
          Let&rsquo;s discuss your project!
        </h2>
        <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          I&rsquo;m a Full-Stack Developer &amp; AI Specialist with 8+ years of
          experience in Laravel, Vue.js, React and RAG pipelines — always open
          to discussing new projects and creative ideas. Let&rsquo;s connect and
          build something amazing together.
        </p>
        <Link
          href="#contact"
          className="group mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[#fbbe07] text-white text-lg font-bold hover:bg-yellow-500 transition-colors"
        >
          Let&rsquo;s work Together
          <ArrowRightIcon
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
