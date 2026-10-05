import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ClockIcon, CommentIcon } from "../../Icons";
import { posts } from "../../data/content";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return post
    ? {
        title: `${post.title} | Blog`,
        description: post.intro,
      }
    : {};
}

export default async function BlogArticle({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-28 md:px-12">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#fbbe07]"
        >
          <ArrowLeftIcon size={13} />
          Back to blog
        </Link>

        <header className="mx-auto max-w-3xl pb-9 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#fbbe07]">
            Notes on software & product development
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{post.intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-2">
              <ClockIcon size={13} />
              {post.readingTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <CommentIcon size={13} />
              {post.comments} comments
            </span>
          </div>
        </header>

        <div className="relative h-64 overflow-hidden rounded-3xl bg-slate-100 md:h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mt-12 max-w-none">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-5 text-base leading-8 text-slate-600 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-slate-50 p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fbbe07]">
              Enjoyed this article?
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Explore more ideas and projects.
            </h2>
            <Link
              href="/#blogs"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[#fbbe07] transition-colors hover:text-[#d79f00]"
            >
              Back to all articles
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
