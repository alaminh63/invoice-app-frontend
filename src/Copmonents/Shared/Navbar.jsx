import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const navItems = [
    { address: "/", title: "Home" },
    { address: "/invoiceForm", title: "Add Invoice" },
    { address: "/allInvoices", title: "All Invoice" },
  ];

  return (
    <nav className="bg-blue-500 p-4 flex justify-between px-20">
      <h2 className="text-3xl text-white font-bold">InvoiceApp</h2>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <Link key={item.id} to={item.address}>
            <li
              className={`text-white cursor-pointer ${
                activeNavItem === item.title ? "border-b-4 border-white" : ""
              } py-2 text-lg font-medium`}
              onClick={() => setActiveNavItem(item.title)}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
