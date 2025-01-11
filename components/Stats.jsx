import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="flex justify-around">
        <div>
          <h3 className="text-2xl font-bold">10K+</h3>
          <p>Users</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">1M+</h3>
          <p>Transactions</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">5K+</h3>
          <p>Developers</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
