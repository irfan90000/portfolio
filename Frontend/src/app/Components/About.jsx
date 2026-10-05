import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="relative z-10 pb-20 lg:pb-40">
      <div
        className="
          w-full
          mx-auto
          bg-white
          rounded-[2rem]
          p-4
          sm:p-6
          md:p-8
          lg:p-16
          flex
          flex-col
          items-start
          gap-8
          sm:gap-10
          md:gap-12
          lg:flex-row
          lg:gap-12
          lg:-mb-40
        "
      >
        {/* =========================
            IMAGE + SOCIAL ICONS
        ========================= */}
        <div
          className="
            order-1
            lg:order-1
            w-full
            lg:w-1/2
            flex
            justify-center
            lg:justify-start
            flex-shrink-0
            self-start
          "
        >
          <div
            className="
              relative
              self-start
              pb-10
              sm:pb-11
              md:pb-12
            "
          >
            {/* Image */}
            <div
              className="
                w-[180px]
                sm:w-[240px]
                md:w-[300px]
                lg:w-[400px]
                h-[240px]
                sm:h-[320px]
                md:h-[400px]
                lg:h-[500px]
                rounded-xl
                sm:rounded-2xl
                overflow-hidden
                lg:relative
                lg:bottom-12
              "
            >
              <Image
                src="/img.jpg"
                alt="Muhammad Irfan"
                width={400}
                height={500}
                className="
                  w-full
                  h-full
                  object-cover
                  object-top
                "
              />
            </div>

            {/* Social Icons */}
            <div
              className="
                absolute
                bottom-0
                lg:bottom-12
                left-1/2
                -translate-x-1/2
                z-30
                bg-white
                rounded-lg
                sm:rounded-xl
                shadow-lg
                shadow-gray-300
                px-3
                sm:px-5
                md:px-6
                lg:px-8
                py-2
                sm:py-3
                md:py-4
                flex
                items-center
                gap-3
                sm:gap-4
                md:gap-5
                lg:gap-6
              "
            >
              {/* Facebook */}
              <a
                href="https://www.facebook.com/irfan.iqbal.75873"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#fbbe07]
                  hover:text-[#d79f00]
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-[22px] sm:h-[22px]"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/irfan90000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#fbbe07]
                  hover:text-[#d79f00]
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-[22px] sm:h-[22px]"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/irfan-iqbal-96a879137"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#fbbe07]
                  hover:text-[#d79f00]
                  transition-colors
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-[22px] sm:h-[22px]"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            TEXT CONTENT
        ========================= */}
        <div
          className="
            order-2
            lg:order-2
            w-full
            lg:w-1/2
            flex-shrink-0
            self-start
            lg:text-start
            xs:text-center
            md:text-center
          "
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-5xl
              font-extrabold
              text-gray-900
              leading-tight
            "
          >
            I am Professional
            <br />
            Full-Stack Developer
            <br />& AI Specialist
          </h2>

          <p
            className="
              mt-4
              sm:mt-5
              md:mt-6
              lg:mt-8
              text-gray-500
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
            "
          >
            I design and develop scalable web applications for clients,
            specializing in Laravel, Vue.js, React.js and the MERN stack. My
            passion is building AI-powered experiences through chatbots and RAG
            pipelines.
          </p>

          <p
            className="
              mt-3
              sm:mt-4
              text-gray-500
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
            "
          >
            With 8+ years of experience from junior to senior developer, I
            deliver robust backends, clean APIs and user-centric interfaces for
            startups and enterprises worldwide.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-5
              sm:mt-6
              md:mt-7
              lg:mt-10
              flex
              flex-wrap
              items-center
              gap-2
              sm:gap-3
              md:gap-4
            "
          >
            <a
              href="#portfolio"
              className="
                px-3
                sm:px-4
                md:px-5
                lg:px-6
                py-2
                rounded-md
                bg-[#fbbe07]
                text-white
                text-xs
                sm:text-sm
                md:text-base
                font-bold
                hover:bg-yellow-600
                transition-colors
              "
            >
              My Projects
            </a>

            <a
              href="/Muhammad_Irfan_CV.pdf"
              download
              className="
                px-3
                sm:px-4
                md:px-5
                lg:px-6
                py-2
                rounded-md
                border
                border-gray-200
                text-gray-900
                text-xs
                sm:text-sm
                md:text-base
                font-bold
                hover:border-[#fbbe07]
                hover:text-[#fbbe07]
                transition-colors
                inline-flex
                items-center
                gap-1
                sm:gap-2
              "
            >
              <span>⬇</span>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
