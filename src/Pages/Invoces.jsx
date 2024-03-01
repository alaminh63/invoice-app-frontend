import React from "react";

const Invoice = () => {
  return (
    <>
      <div className="bg-white p-8 shadow-md max-w-A4 mx-auto mt-8 rounded-md">
        <div className="header-container relative mb-6">
          {/* Header with clip path and blue background */}
          <div className="h-8 w-full absolute top-0 right-0 clip-path-polygon"></div>

          <h1 className="text-3xl font-bold text-gray-800 relative z-10">
            Invoice
          </h1>
          <p className="text-gray-600 relative z-10">
            Invoice #12345 | Date: 2024-03-02
          </p>

          {/* Additional Information */}
          <div className="flex justify-between mt-4 text-sm text-gray-700">
            <div>
              <p>Issued by: Your Company Name</p>
              <p>Contact: contact@yourcompany.com</p>
            </div>

            <div>
              <p>Payment Due: 2024-03-15</p>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold text-gray-700">Client:</p>
            <p className="text-gray-800">MD Tarikul Islam</p>
            <p className="text-gray-800">Email: tarikulIslam@gmail.com</p>
          </div>

          <div>
            <p className="font-bold text-gray-700">Billing Address:</p>
            <p className="text-gray-800">
              123 Main St, Cityville, State, 12345
            </p>
          </div>
        </div>

        {/* Invoice Items */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left text-gray-800">Item</th>
              <th className="py-2 text-left text-gray-800">Issued Item</th>
              <th className="py-2 text-left text-gray-800">Item Quantity</th>
              <th className="py-2 text-left text-gray-800">Item Unit</th>
              <th className="py-2 text-left text-gray-800">Voucher Date</th>
              <th className="py-2 text-left text-gray-800">Return Date</th>
              <th className="py-2 text-left text-gray-800">Voucher Issue Details</th>
              <th className="py-2 text-left text-gray-800">Description</th>
              <th className="py-2 text-right text-gray-800">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-gray-800">1</td>
              <td className="py-2 text-gray-800">Laptop</td>
              <td className="py-2 text-gray-800">2</td>
              <td className="py-2 text-gray-800">Piece(s)</td>
              <td className="py-2 text-gray-800">2024-03-02</td>
              <td className="py-2 text-gray-800">2024-03-10</td>
              <td className="py-2 text-gray-800">Serial: ABC123</td>
              <td className="py-2 text-gray-800">High-performance laptop</td>
              <td className="py-2 text-right text-green-600 font-bold">
                $1500.00
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          {/* Total Amount */}
          <div>
            <p className="text-lg font-bold text-gray-800">Total: $1500.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
