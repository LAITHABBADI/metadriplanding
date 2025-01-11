// import React from "react";

// const Features = () => {
//   return (
//     <section className="py-20 bg-gray-900 text-white">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-bold">Features</h2>
//         <p className="text-gray-400">Explore the benefits of Metadrip</p>
//       </div>
//       <div className="grid grid-cols-3 gap-8">
//         <div className="bg-gray-800 p-6 rounded hover:shadow-lg">Feature 1</div>
//         <div className="bg-gray-800 p-6 rounded hover:shadow-lg">Feature 2</div>
//         <div className="bg-gray-800 p-6 rounded hover:shadow-lg">Feature 3</div>
//       </div>
//     </section>
//   );
// };

// export default Features;


import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Metadrip</h2>
        <p className="text-gray-400 text-lg">
          Seamless integration with the world's leading AI models.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-6 rounded hover:shadow-lg text-center">
          <div className="text-2xl font-bold mb-4">Cutting-Edge AI Intelligence</div>
          <p className="text-gray-400">
            Harness the power of advanced AI models, including GPT-4 and Claude, to analyze Metadrip
            transactions in real-time and provide data-driven insights.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded hover:shadow-lg text-center">
          <div className="text-2xl font-bold mb-4">Seamless Execution</div>
          <p className="text-gray-400">
            Experience ultra-efficient, frictionless transactions powered by deep Metadrip
            integration for rapid execution without compromise.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded hover:shadow-lg text-center">
          <div className="text-2xl font-bold mb-4">Comprehensive Ecosystem Integration</div>
          <p className="text-gray-400">
            Effortlessly connect with the Metadrip ecosystem's protocols and services, ensuring full
            synergy with the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
