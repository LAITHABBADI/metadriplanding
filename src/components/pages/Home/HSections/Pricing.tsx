


import React from "react";

const Pricing = () => {
  const faqs = [
    {
      question: "Why Choose MetaDrip?",
      answer:
        "Manage your entire crypto portfolio from a single dashboard - no more juggling multiple apps.",
    },
    {
      question: "Real-Time Updates",
      answer: "Stay informed with instant price alerts and portfolio notifications.",
    },
    {
      question: "User-Friendly Design?",
      answer:
        "Intuitive interface with both dark and light modes for comfortable trading any time of day.",
    },
  ];

  return (
    <section id="pricing" className="min-h-screen py-32 relative">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-black via-[#0A1533] to-[#000216]">
        {/* Custom Orb Effects */}
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-[#00ffcc]/20 rounded-full blur-[150px]"></div>
        <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-[#0077ff]/30 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#ff0077]/30 rounded-full blur-[150px]"></div>
      </div>

      {/* Discord Button */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] rounded-full px-4 py-1.5 transition-colors"
        >
          <span className="text-sm font-medium">Join The Discord</span>
          <span className="text-xs">→</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Pricing Card */}
        <div className="max-w-[440px] mx-auto mb-16">
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.05]">
            {/* Card Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-white/60 mb-4">Price Alerts</div>
              <div className="text-[56px] font-medium leading-none mb-4 text-[#F9A825]">15 SOL</div>
              <div className="inline-block bg-[#2A2A45] rounded-full px-4 py-1 text-sm">Lifetime</div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <span>Bundler</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <span>Volume Tools</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <span>Comment Bot</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <span>Bump It</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <span>+ Much More</span>
              </div>
            </div>

            {/* Purchase Button */}
            <a
              href="#"
              className="block w-full bg-white/10 hover:bg-white/20 text-center py-3 rounded-xl transition-colors text-white"
            >
              <span className="mr-2">Purchase Today</span>
              <span className="text-white/60">→</span>
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Price Alerts */}
          <div className="bg-[#1F1F3B] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#F9A825] mb-4">Never Miss a Move</h3>
            <p className="text-white/70 mb-4">
              Set custom alerts for price changes, trending tokens, and market opportunities. Get
              notifications directly through Telegram.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#F9A825] hover:text-white/70">
              Learn More →
            </a>
          </div>

          {/* Category Tracking */}
          <div className="bg-[#1F1F3B] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#F9A825] mb-4">Track What Matters</h3>
            <p className="text-white/70 mb-4">
              Monitor top performers across categories like AI, DeFi, and Gaming. Stay ahead of
              market trends with real-time analytics.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#F9A825] hover:text-white/70">
              Learn More →
            </a>
          </div>

          {/* Portfolio Analytics */}
          <div className="bg-[#1F1F3B] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#F9A825] mb-4">Deep Portfolio Insights</h3>
            <p className="text-white/70 mb-4">
              Track your profit/loss across time periods, analyze token performance, and get
              AI-powered investment suggestions.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#F9A825] hover:text-white/70">
              Learn More →
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-white">
              Frequently <span className="text-white/40">asked</span>
              <br />
              <span className="text-white/40">questions</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#2A2A45] p-6 rounded-lg mb-4">
                <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
