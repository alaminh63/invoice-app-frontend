import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All_Invoices = () => {
  const [allInvoices, setAllInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {git
        const response = await fetch("http://localhost:3000/getInvoice");
        const data = await response.json();
        setAllInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl max-w-6xl mx-auto">ALL INVOICES</h1>
      <table className="w-full rounded-full shadow-xl  text-center max-w-6xl mt-4 mx-auto border-collapse">
        <thead>
          <tr className="border-b  bg-blue-500 text-white">
            <th className="py-2   ">Issue To</th>
            <th className="py-2  ">Issue Date</th>
            <th className="py-2  ">Return Date</th>
           
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
                 
                  <td className="py-2  ">
                    <Link
                      className="border  px-4 rounded-3xl text-white bg-blue-500"
                      to={`/invoice/${item._id}`}
                    >
                    Print
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr key={index} className="border-b bg-gray-200">
                  <td className="py-2 ">{item.issueTo}</td>
                  <td className="py-2 ">{item.issueDate}</td>
                  <td className="py-2 ">{item.returnDate}</td>
                  
                  <td className="py-2 ">
                    <Link
                      className="border  px-4 rounded-3xl text-white bg-blue-500"
                      to={`/invoice/${item._id}`}
                    >
                    Print
                    </Link>
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
