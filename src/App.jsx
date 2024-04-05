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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cakes" element={<Cakes />}></Route>
        <Route path="/puff" element={<Puff />}></Route>
        <Route path="/bread" element={<Bread />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/cookies" element={<Cookies />}></Route>
        <Route path="/others" element={<Others />}></Route>

        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
