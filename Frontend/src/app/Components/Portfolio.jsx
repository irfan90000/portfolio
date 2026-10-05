import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../Icons";
import { projects } from "../data/content";

export default function Portfolios() {
  return (
    <section id="portfolio" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Portfolio
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Here&rsquo;s a selection of my recent work, showcasing my skills in
            creating scalable Laravel backends, AI integrations, and
            user-centric interfaces.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200/50 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 py-4 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-widest text-gray-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Button */}
                <div className="mt-auto pt-4 flex justify-end">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md font-bold text-gray-900 transition-colors duration-300 hover:border-[#fbbe07] hover:text-[#fbbe07]"
                  >
                    Case Study
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
