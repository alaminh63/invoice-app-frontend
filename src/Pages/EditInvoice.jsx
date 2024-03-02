import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditInvoice = () => {
  const [invoice, setInvoice] = useState({});
  const { id } = useParams();
  const { _id, returnDate, issueTo, issueDetails, issueDate } = invoice;

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

  const [singleItem, setSingleItem] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const issueTo = form.issueTo.value;
    const issueDate = form.issueDate.value;
    const returnDate = form.returnDate.value;
    const issueDetails = form.issueDetails.value;
    const postData = {
      issueTo,
      issueDate,
      returnDate,
      issueDetails,
      singleItem,
    };

    fetch(`http://localhost:3000/updateInvoice/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Invoice Updated Successfully");
        }
      });
  };

  const handleSingleItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form.item.value;
    const issueQuantity = form.issueQuantity.value;
    const itemUnit = form.itemUnit.value;
    const newItem = { item, issueQuantity, itemUnit };

    setSingleItem([...singleItem, newItem]);
    form.reset(); // Clear form fields after submission
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 my-4">Invoice Information</h2>
      {singleItem.length ? (
        <div>
          <table className="w-full text-center max-w-3xl mx-auto border-collapse">
            <thead>
              <tr className="border-b bg-blue-500 text-white">
                <th className="py-2   ">Item Name</th>
                <th className="py-2  ">Item Unit</th>
                <th className="py-2  ">Issue Quantity</th>
              </tr>
            </thead>
            <tbody>
              {singleItem.map((item, index) => (
                <>
                  {index % 2 !== 0 ? (
                    <tr key={index} className="border-b bg-slate-300">
                      <td className="py-2 ">{item.item}</td>
                      <td className="py-2 ">{item.itemUnit}</td>
                      <td className="py-2 ">{item.issueQuantity}</td>
                    </tr>
                  ) : (
                    <tr key={index} className="border-b bg-gray-200">
                      <td className="py-2 ">{item.item}</td>
                      <td className="py-2 ">{item.itemUnit}</td>
                      <td className="py-2 ">{item.issueQuantity}</td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSingleItems} className=" mt-5">
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Item Name</span>
            </label>
            <select
              name="item"
              className="border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
            >
              <option value="" disabled>
                Select an item
              </option>
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Issue Quantity</span>
            </label>
            <input
              type="number"
              name="issueQuantity"
              placeholder="-"
              className="border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Item Unit</span>
            </label>
            <input
              type="text"
              name="itemUnit"
              placeholder="-"
              className="border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-2 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <form onSubmit={handleSubmit} className=" ">
        <h2 className="text-2xl font-semibold mb-4">Invoice Details</h2>
        <div className="flex  gap-4  ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Issue To</span>
            </label>
            <select
              name="issueTo"
              placeholder=""
              className=" border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5 "
            >
              <option value="" disabled>
                Select Name
              </option>
              <option value="tarikul">Tarikul Islam</option>
              <option value="sahil">Sahil</option>
              <option value="arnob">Arnob</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input
              type="date"
              name="issueDate"
              placeholder=""
              className="border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
            />
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text font-semibold">Return Date</span>
            </label>
            <input
              type="date"
              name="returnDate"
              className="border-2 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
            />
          </div>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text font-semibold">
              Voucher Issue Details
            </span>
          </label>
          <textarea
            type="text"
            name="issueDetails"
            className="border-2 py-12 border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500  w-full  p-2.5"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white mt-1 px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInvoice;
