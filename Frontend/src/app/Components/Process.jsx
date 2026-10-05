import {
  CodeIcon,
  RocketIcon,
  SearchIcon,
  SitemapIcon,
} from "../Icons";

const steps = [
  {
    icon: <SearchIcon size={28} />,
    title: "1. Research",
    description:
      "Analyze project requirements and business goals. With 8+ years of experience, I study the domain — whether it's a dealership DMS, recruitment platform, or ERP — before writing a single line of code.",
  },
  {
    icon: <SitemapIcon size={28} />,
    title: "2. Architect",
    description:
      "Design scalable backend architectures with Laravel, Node.js and FastAPI microservices — REST APIs, role-based access, multi-tenant data isolation, and vector databases like Pinecone for AI features.",
  },
  {
    icon: <CodeIcon size={28} />,
    title: "3. Build",
    description:
      "Craft responsive interfaces with Vue.js, React.js, Nuxt.js and Tailwind CSS, powered by clean Laravel backends. I also build RAG-powered AI chatbots and LLM integrations using Python (FastAPI).",
  },
  {
    icon: <RocketIcon size={28} />,
    title: "4. Launch",
    description:
      "Deploy with confidence using AWS, Docker and CI workflows. Performance optimization, SSL, caching with Redis, and ongoing support — from junior developer to senior, I've shipped it all.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-gradient-to-br from-[#fbbe07]/10 via-white to-[#fbbe07]/5 py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="md:sticky md:top-24 md:self-start h-fit">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Work Process
          </h2>

          <p className="mt-8 text-gray-500 text-lg leading-relaxed">
            Driven by design and powered by code, I create digital interfaces
            that feel intuitive and perform seamlessly. Every layout, animation,
            and component is crafted with intention — merging usability with
            visual clarity.
          </p>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            From AI chatbots with RAG pipelines to full SaaS platforms, I blend
            clean design with efficient code to build engaging, user-friendly
            web experiences that stand out.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className=" md:overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-[#fbbe07] scrollbar-track-transparent">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-yellow-200/50 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#fbbe07]/10 text-[#fbbe07] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#fbbe07] group-hover:text-white">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
