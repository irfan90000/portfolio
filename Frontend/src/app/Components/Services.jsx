import Link from "next/link";

const services = [
  {
    title: "Backend Development (Laravel & Node.js)",
    description:
      "I build scalable backend architectures with Laravel, PHP, Node.js and Express.js — REST & GraphQL APIs, multi-tenant systems, role-based access, and integrations with CRM, DMS and payment gateways.",
  },
  {
    title: "AI Integration (Chatbots & RAG Pipelines)",
    description:
      "I develop AI-powered chatbots and RAG pipelines using Python (FastAPI), LLM integration and vector databases like Pinecone — delivering context-aware answers with Redis caching for fast responses.",
  },
  {
    title: "Frontend Development (Vue.js & React)",
    description:
      "I craft responsive, high-performance interfaces with Vue.js, Nuxt.js, React.js and Inertia.js, styled with Tailwind CSS — ensuring accessibility, scalability and a seamless user journey.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#fbbe07]/10 via-white to-[#fbbe07]/5 py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: heading + description */}
        <div className="sticky top-24 self-start h-fit">
          <h2 className=" text-4xl md:text-5xl font-extrabold text-gray-900">
            What I do?
          </h2>
          <p className="mt-8 text-gray-500 text-lg leading-relaxed">
            I specialize in full-stack development, crafting scalable Laravel
            backends, AI chatbots, and responsive web applications that deliver
            value and usability.
          </p>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            My approach combines 8+ years of technical expertise — from junior
            developer to senior — to deliver solutions that are both visually
            appealing and highly functional for users.
          </p>
          <Link
            href="#contact"
            className="inline-block mt-10 px-6 py-2 rounded-md bg-[#fbbe07] text-white font-bold hover:bg-yellow-500 transition-colors"
          >
            Say Hello! 👋
          </Link>
        </div>

        {/* Right: service cards */}
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200/50"
            >
              {/* ⬇️ Gold line — hidden, slides in on hover ⬇️ */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 rounded-full bg-[#fbbe07] transition-all duration-300 group-hover:h-4/5" />

              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#fbbe07] transition-colors">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
