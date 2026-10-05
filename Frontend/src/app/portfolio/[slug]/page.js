import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DownloadIcon,
} from "../../Icons";
import { projects } from "../../data/content";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project
    ? {
      title: `${project.title} | Case Study`,
      description: project.overview,
    }
    : {};
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-24 pt-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#fbbe07]"
        >
          <ArrowLeftIcon size={13} />
          Back to portfolio
        </Link>

        <header className="grid gap-10 pb-12 pt-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#fbbe07]">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {project.title}
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            {project.overview}
          </p>
        </header>

        <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-900/10 md:h-[480px]">
          <Image
            src={project.image}
            alt={`${project.title} project`}
            fill
            priority

            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[minmax(0,1fr)_300px] md:gap-20">
          <article className="space-y-10">
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fbbe07]">
                The challenge
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {project.challenge}
              </p>
            </section>

            <section>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fbbe07]">
                The approach
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {project.approach}
              </p>
            </section>

            <section>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fbbe07]">
                Project highlights
              </p>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-base leading-7 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fbbe07]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">
              Technologies & focus
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#fbbe07]/10 px-3 py-2 text-sm font-medium text-[#a77a00]"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="my-7 h-px bg-slate-100" />
            <p className="text-sm leading-6 text-slate-500">
              Want to learn more about my experience and skills?
            </p>
            <a
              href="/Muhammad_Irfan_CV.pdf"
              download
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#fbbe07] px-5 py-3 font-semibold text-white transition-colors hover:bg-yellow-500"
            >
              <DownloadIcon size={14} />
              Download my CV
            </a>
          </aside>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 font-semibold text-[#fbbe07] transition-colors hover:text-[#d79f00]"
          >
            Explore more projects
            <ArrowRightIcon size={13} />
          </Link>

          {project.link && <Link
            href={project.link}
            className="inline-flex items-center w-50 text-white rounded-md gap-2 bg-[#fbbe07] px-6 py-2 font-semibold transition-colors hover:bg-yellow-500"
          >
            VISIT LIVE SITE
            <ArrowRightIcon size={13} />
          </Link>}
        </div>
      </div>
    </main>
  );
}
