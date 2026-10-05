"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { sendMailThunk } from "../Thunks/sendMailThunk";

export default function Contact() {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError(false);

    try {
      await dispatch(
        sendMailThunk({
          name: form.name,
          email: form.email,
          location: form.location,
          budget: form.budget,
          message: form.message,
        }),
      ).unwrap();
      setSubmitMessage("Thanks! Your message has been sent.");
      setForm({
        name: "",
        email: "",
        location: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(true);
      setSubmitMessage(
        typeof error === "string"
          ? error
          : "Unable to send your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-[#fbbe07] transition-colors placeholder-gray-400 text-gray-900";

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Address:",
      value: "Lahore, Pakistan",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "My Email:",
      value: "irfaniqbal7933@gmail.com",
    },
    {
      icon: <FaPhoneAlt size={20} />,
      label: "Call Me Now:",
      value: "+92 315 2645283",
    },
  ];

  const socials = [
    { icon: <FaGithub size={18} />, href: "https://github.com/Irfan90000" },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/irfan-iqbal-96a879137/",
    },
    { icon: <FaWhatsapp size={18} />, href: "https://wa.me/923152645283" },
  ];

  return (
    <section id="contact" className="bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ⬇️ Card overlaps the dark footer below ⬇️ */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 -mb-48 p-8 md:p-16 grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Let&rsquo;s discuss your Project
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              I&rsquo;m available for freelance work and full-time opportunities
              in the Gulf region. Drop me a line if you have a project you think
              I&rsquo;d be a good fit for.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#fbbe07]/10 text-[#fbbe07] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-bold text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#fbbe07]/10 text-[#fbbe07] flex items-center justify-center hover:bg-[#fbbe07] hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit}>
            <p className="text-gray-500">
              I&rsquo;m always open to discussing full-stack development, AI
              chatbot integration, or partnership opportunities.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget*"
                  required
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  required
                  value={form.location}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {submitMessage && (
              <p
                className={`mt-4 text-sm ${submitError ? "text-red-600" : "text-green-700"}`}
                role={submitError ? "alert" : "status"}
              >
                {submitMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-8 inline-flex items-center gap-3 px-6 py-2 rounded-md bg-[#fbbe07] text-white font-bold hover:bg-yellow-500 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Submit"}
              <FaPaperPlane
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
