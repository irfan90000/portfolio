import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "8+ Years", label: "Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "4", label: "Companies Worked" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        bg-gradient-to-br
        from-[#fbbe07]/10
        via-white
        to-[#fbbe07]/5
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          md:px-10
          lg:px-12
          pt-28
          sm:pt-28
          md:pt-32
          lg:pt-20
          pb-10
          sm:pb-12
          md:pb-14
          lg:pb-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            sm:gap-10
            md:gap-12
            lg:grid-cols-2
            lg:items-center
            lg:gap-14
          "
        >
          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              order-1
              lg:order-2
              relative
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[380px]
                sm:max-w-[420px]
                md:max-w-[460px]
                lg:max-w-[520px]

                h-[300px]
                sm:h-[360px]
                md:h-[420px]
                lg:h-[560px]

                overflow-hidden
                rounded-t-[2rem]

                lg:bottom-10
              "
            >
              <Image
                src="/img.jpg"
                alt="Irfan Iqbal"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              order-2
              lg:order-1
              w-full
              pb-4
              sm:pb-6
              md:pb-8
              lg:pb-10
              lg:relative
              lg:bottom-2
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-4xl
                lg:text-4xl
                font-extrabold
                leading-tight
                text-gray-900
              "
            >
              Hello, I’m
              <br />
              Irfan Iqbal
            </h1>

            <p
              className="
                mt-3
                sm:mt-4
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
                text-gray-600
              "
            >
              I’m a{" "}
              <span className="underline decoration-pink-300 underline-offset-4">
                Full-Stack Software Developer
              </span>{" "}
              &{" "}
              <span className="font-semibold text-gray-900">AI Specialist</span>{" "}
              based in Pakistan. I build scalable web applications with Laravel,
              Vue.js, React.js and the MERN stack.
            </p>

            {/* BUTTON */}
            <Link
              href="#contact"
              className="
                mt-6
                sm:mt-7
                inline-block
                rounded-md
                bg-[#fbbe07]
                px-6
                sm:px-7
                py-3
                font-bold
                text-white
                transition-colors
                hover:bg-yellow-500
              "
            >
              Say Hello! 👋
            </Link>

            {/* STATS */}
            <div
              className="
                mt-7
                sm:mt-8
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-3
                sm:gap-4
                lg:relative
                lg:top-2
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-lg
                    bg-[#fbbe07]/10
                    px-3
                    py-3
                    sm:px-4
                    sm:py-4
                    text-center
                  "
                >
                  <p
                    className="
                      text-xl
                      sm:text-2xl
                      font-extrabold
                      text-gray-900
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      sm:text-sm
                      text-gray-500
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div
              className="
                mt-7
                sm:mt-8
                flex
                flex-wrap
                gap-2
                lg:relative
                lg:top-2
              "
            >
              {[
                "Laravel",
                "Node.js",
                "React.js",
                "Vue.js",
                "Inertia.js",
                "MERN Stack",
                "AI & Automation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-xs
                    font-medium
                    text-gray-600
                    shadow-sm
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
