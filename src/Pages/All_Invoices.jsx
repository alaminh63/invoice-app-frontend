import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All_Invoices = () => {
  const [allInvoices, setAllInvoices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/getInvoice")
      .then((res) => res.json())
      .then((data) => setAllInvoices(data));
  }, []);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">ALL INVOICES</h1>
      <table className="w-full text-center max-w-6xl mt-4 mx-auto border-collapse">
        <thead>
          <tr className="border-b bg-blue-500 text-white">
            <th className="py-2   ">Issue To</th>
            <th className="py-2  ">Issue Date</th>
            <th className="py-2  ">Return Date</th>
            <th className="py-2 ">Action</th>
            <th className="py-2 ">Print</th>
          </tr>
        </thead>
        <tbody>
          {allInvoices?.map((item, index) => (
            <>
              {index % 2 !== 0 ? (
                <tr key={index} className="border-b bg-slate-300">
                  <td className="py-2 ">{item.issueTo}</td>
                  <td className="py-2 ">{item.issueDate}</td>
                  <td className="py-2 ">{item.returnDate}</td>
                  <td className="py-2 ">
                    <button className="border  px-4 rounded-3xl text-white bg-blue-500">
                      Edit
                    </button>
                  </td>
                  <td className="py-2 ">
                    <Link to={`/invoice/${item._id}`}>Go</Link>
                  </td>
                </tr>
              ) : (
                <tr key={index} className="border-b bg-gray-200">
                  <td className="py-2 ">{item.issueTo}</td>
                  <td className="py-2 ">{item.issueDate}</td>
                  <td className="py-2 ">{item.returnDate}</td>
                  <td className="py-2 ">
                    {" "}
                    <button className="border  px-4 rounded-3xl text-white bg-blue-500">
                      Edit
                    </button>
                  </td>
                  <td className="py-2 ">
                    <Link to={`/invoice/${item._id}`}>Go</Link>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All_Invoices;
