import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Invoice = () => {
  // invoice dynamic state
  const [invoice, setInvoice] = useState({});
  const { id } = useParams();
  const { _id, returnDate, issueTo, issueDetails, issueDate, singleItem } =
    invoice;

  // invoice data comming from server
  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch(`http://localhost:3000/getInvoice/${id}`);
        const data = await response.json();
        setInvoice(data);
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };

    fetchInvoice();
  }, [id]);

  // sum of total quantity
  const totalSum = singleItem?.reduce((accumulator, item) => {
    const issueQuantity = parseFloat(item.issueQuantity);
    return accumulator + issueQuantity;
  }, 0);

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="bg-white p-8 h-[90vh] shadow-md max-w-6xl mx-auto mt-8 rounded-md">
        <div className="header-container relative mb-6">
          {/* Header with clip path and blue background */}
          <div className="h-8 w-full absolute top-0 right-0 clip-path-polygon"></div>

          <h1 className="text-3xl font-bold text-gray-800 relative z-10">
            Invoice
          </h1>
          <p className="text-gray-600 relative z-10">
            Invoice #{_id} | Date: {issueDate}
          </p>

          {/* Additional Information */}
          <div className="flex justify-between mt-4 text-sm text-gray-700">
            <div>
              <p>Issued by: SysSolution</p>
              <p>Contact: sysSolution@gmail.com</p>
            </div>

            <div>
              <p>
                <span className="font-semibold">Return:</span> {returnDate}
              </p>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold text-gray-700">Client:</p>
            <p className="text-gray-800">{issueTo}</p>
            <p className="text-gray-800">Email: {issueTo}@gmail.com</p>
          </div>

          <div>
            <p className="font-bold text-gray-700">Transfer To</p>
            <p className="text-gray-800">
              123 Main St, Cityville, State, 12345
            </p>
          </div>
        </div>

        {/* Invoice Items */}
        <table className="w-full text-center max-w-6xl mt-4 mx-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 ">Sr</th>
              <th className="py-2 ">Item</th>
              <th className="py-2 ">Issued Item</th>
              <th className="py-2 ">Item Quantity</th>
            </tr>
          </thead>
          <tbody>
            {singleItem?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{index + 1}</td>
                <td className="py-2 ">{item.item}</td>
                <td className="py-2 ">{item.itemUnit}</td>
                <td className="py-2 ">{item.issueQuantity}</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div>
          <h3 className="font-semibold mt-5">More details about this issue:</h3>
          <p>{issueDetails}</p>
        </div>
        <div className="flex justify-end mt-4">
          {/* Total Amount */}
          <div>
            <p className="text-lg font-bold text-gray-800">
              Total Quantity:{" "}
              {totalSum !== undefined ? `${totalSum.toFixed()}` : "Loading..."}
            </p>
          </div>
        </div>
        <button
          className=" custom-navbar border px-4 py-2 rounded-3xl text-white bg-blue-500"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default Invoice;
