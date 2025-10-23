"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // ✅ Type-safe handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Type-safe handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <>
      <section
        id="contact"
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white px-6 lg:px-16 py-20 gap-12 lg:gap-20 overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            "pointer-events-none mask-radial-to-90% mask-radial-at-center z-[-2]"
          )}
        />

        {/* Left: Contact Form */}
        <motion.div
          className="flex-1 w-full max-w-md lg:max-w-lg z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="mb-4" whileHover={{ scale: 1.02 }}>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-indigo-700/80 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </motion.div>

          <p className="text-gray-300 mb-12 max-w-2xl leading-relaxed text-lg">
            I'm always excited to discuss new projects, creative ideas, or
            opportunities to bring your vision to life. Let's create something
            amazing together!
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="relative w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 
                  focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300
                  peer"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="relative w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 
                  focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300
                  peer"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300"
              >
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="relative w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 resize-none
                  focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300
                  peer"
                  required
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 2m0 0l-2-2m2 2v2.5M20 7V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h15a2 2 0 002-2v-2"
                      />
                    </svg>
                  </>
                )}
              </span>
            </motion.button>
          </form>

          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="mt-8 p-6 bg-zinc-900/50 border border-zinc-500/30 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-zinc-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-zinc-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center z-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/avator.png"
              alt="Profile avatar"
              width={400}
              height={400}
              className="rounded-3xl drop-shadow-[0_20px_25px_rgba(59,130,246,0.35)] transition-all duration-700 object-cover"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
