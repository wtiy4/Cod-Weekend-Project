import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout"; // ✅ صح
import FirstPage from "../components/FirstPage";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <FirstPage /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
