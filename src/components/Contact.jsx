import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="pt-16 pb-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">💬 Let's Connect</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Get In Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether you're looking for a mobile app, web solution, or just want to discuss technology, I'm here to help make it happen!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-700/50">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-slate-100">Let's Build Something Amazing</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">I'm passionate about creating innovative solutions that make a difference. From mobile apps to web platforms, let's collaborate and turn your vision into reality!</p>
                </div>

                <div className="space-y-6">
                  {/* Quick Response Badge */}
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-2xl border border-blue-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 font-semibold">Usually responds within 24 hours</span>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-4">
                    <div className="group flex items-center space-x-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 text-lg">Email</h4>
                        <a href="mailto:dzikrirazzan02@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                          dzikrirazzan02@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-center space-x-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-3 rounded-xl group-hover:from-blue-800 group-hover:to-blue-900 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 text-lg">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/dzikrirazzan/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                          dzikrirazzan
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-center space-x-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-3 rounded-xl group-hover:from-slate-700 group-hover:to-slate-800 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 text-lg">GitHub</h4>
                        <a href="https://github.com/dzikrirazzan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                          dzikrirazzan
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-center space-x-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 hover:scale-105">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 text-lg">Location</h4>
                        <p className="text-slate-300 font-medium">Semarang, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-6 rounded-2xl border border-blue-700/50">
                    <h4 className="font-semibold text-slate-100 mb-3 flex items-center">
                      <span className="bg-blue-500 w-3 h-3 rounded-full mr-3 animate-pulse"></span>
                      Currently Available
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">Open to freelance projects, full-time opportunities, and exciting collaborations. Let's create something amazing together!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <form onSubmit={handleSubmit} className="bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-700/50">
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-blue-900/50 border border-blue-700 text-blue-300 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      Something went wrong. Please try again later.
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-slate-500 bg-slate-700 text-slate-100 placeholder-slate-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-slate-500 bg-slate-700 text-slate-100 placeholder-slate-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical hover:border-slate-500 bg-slate-700 text-slate-100 placeholder-slate-400"
                    placeholder="Tell me about your project or just say hello!"
                    rows="5"
                    required
                  />
                  <p className="text-xs text-slate-400 mt-1">{formData.message.length}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
