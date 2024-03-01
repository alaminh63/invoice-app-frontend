import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import InvoiceForm from "../Pages/InvoiceForm";

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
    ],
  },
]);

export default Router;
