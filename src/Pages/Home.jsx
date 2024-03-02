import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
          {/* home page it will go add information fo invoice form */}
        <Link to="/invoiceForm">
          <button className="py-4 font-bold text-2xl px-6 bg-blue-500 text-white">
            Add Invoice From Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
