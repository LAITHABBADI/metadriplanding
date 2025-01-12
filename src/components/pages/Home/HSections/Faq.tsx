

import React from "react";

const faqs = [
  {
    question: "What is DogWifiTools?",
    answer: "A comprehensive suite of tools for blockchain token development and management.",
  },
  {
    question: "How can I get started?",
    answer: "Simply purchase a license and you'll get immediate access to all our tools.",
  },
  {
    question: "What operating system do you support?",
    answer: "Our tools are compatible with Windows, macOS, and Linux operating systems.",
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-black via-[#0A1533] to-[#000216]">
        {/* Custom Orb Effects */}
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-[#00ffcc]/20 rounded-full blur-[150px]"></div>
        <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-[#0077ff]/30 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#ff0077]/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Frequently <span className="text-gray-400">asked</span> questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <svg
                  className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* Footer Logo */}
        <div className="mt-20 text-center">
          <div className="inline-block p-4 bg-gray-900/60 backdrop-blur-sm rounded-lg">
            <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

// talha