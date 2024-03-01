import React, { useState } from "react";

const InvoiceForm = () => {
  const [singleItem, setSingleItem] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form.item.value;
    const discount = form.discount.value;
    const newItem = { item, discount, singleItem };
    console.log(newItem);
  };

  const handleSingleItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const rate = form.rate.value;
    const newItem = { price, rate };

    setSingleItem([...singleItem, newItem]);
  };
  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSingleItems}
        className="max-w-md mx-auto bg-white p-8 shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Invoice Information</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price $"
            className="input input-bordered rounded-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Rate</span>
          </label>
          <input
            type="text"
            name="rate"
            placeholder="Rate"
            className="input input-bordered rounded-none"
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 shadow-md"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Rate</span>
          </label>
          <input
            type="text"
            name="item"
            placeholder="item"
            className="input input-bordered rounded-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Rate</span>
          </label>
          <input
            type="text"
            name="discount"
            placeholder="discount"
            className="input input-bordered rounded-none"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
