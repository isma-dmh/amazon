import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </>
  );
}

export default App;
