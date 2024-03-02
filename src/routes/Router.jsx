import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import InvoiceForm from "../Pages/InvoiceForm";
import All_Invoices from "../Pages/All_Invoices";
import Invoice from "../Pages/Invoces";
import EditInvoice from "../Pages/EditInvoice";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/invoiceForm",
        element: <InvoiceForm />,
      },
      {
        path: "/allInvoices",
        element: <All_Invoices />,
      },
      {
        path: "/invoice/:id",
        element: <Invoice />,
      },
      
    ],
  },
]);

export default Router;
