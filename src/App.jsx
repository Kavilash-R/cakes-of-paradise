import Main from "./components/Main";
import Contact from "./components/Contact";
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
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import { Route, Routes } from "react-router-dom";

import data from "./back/data/Data";
import { useState } from "react";
import dataPuff from "./back/data/DataPuff";
import dataCakes from "./back/data/DataCakes";
import dataBread from "./back/data/DataBread";
import dataChat from "./back/data/DataChat";
import dataCookies from "./back/data/DataCookies";
function App() {
  const { productItems } = data;
  const { productItems1 } = dataPuff;
  const { productItems2 } = dataCakes;
  const { productItems3 } = dataBread;
  const { productItems4 } = dataChat;
  const { productItems5 } = dataCookies;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main cartItems={cartItems} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        ></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cakes"
          element={
            <Cakes
              productItems2={productItems2}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/puff"
          element={
            <Puff
              productItems1={productItems1}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/bread"
          element={
            <Bread
              productItems3={productItems3}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/chat"
          element={
            <Chat
              productItems4={productItems4}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/cookies"
          element={
            <Cookies
              productItems5={productItems5}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route
          path="/others"
          element={
            <Others
              productItems={productItems}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>

        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
