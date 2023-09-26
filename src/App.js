import "./App.css";
import Header from "./components/header";
import Home from "./modules/Home";
import Product from "./modules/Product";
import { Routes, Route } from "react-router-dom";
import Products from "./modules/Products";
import CategorieProduct from "./modules/CategorieProduct";
import Cart from "./modules/Cart";
import Conatct from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<Product />} />

        <Route path="/Products/" element={<Products />} />
        <Route path="/Categories/:name" element={<CategorieProduct />} />
        <Route path="/Cart/" element={<Cart />} />
        <Route path="/Cart/" element={<Cart />} />
        <Route path="/Contact/" element={<Conatct />} />
        <Route path="/About/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
