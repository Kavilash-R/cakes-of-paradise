import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Purchase from "./components/Purchase";
import About from "./components/About";
import Cakes from "./components/Cakes";
import Puff from "./components/Puff";
import Bread from "./components/Bread";
import Chat from "./components/Chat";
import Cookies from "./components/Cookies";
import Others from "./components/Others";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cakes",
    element: <Cakes />,
  },
  {
    path: "/puff",
    element: <Puff />,
  },
  {
    path: "/bread",
    element: <Bread />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "/others",
    element: <Others />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
