import React from "react";
import Invoice from "./Invoces";

const Home = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <Invoice />

      <div onClick={handlePrint} className="">
        Print
      </div>
    </div>
  );
};

export default Home;
