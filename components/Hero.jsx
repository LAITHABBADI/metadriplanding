import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-black text-white py-20">
      <div className="bg-yellow-500 text-black px-3 py-1 rounded mb-4">
        Introducing Metadrip Agent
      </div>
      <h1 className="text-4xl font-bold mb-4">
        The Intelligent Copilot for Solana
      </h1>
      <p className="text-lg mb-6">
        Elevate your Solana experience with AI-powered insights and delegated actions.
      </p>
      <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
