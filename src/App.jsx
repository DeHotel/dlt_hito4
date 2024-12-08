import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Cart from "./components/Cart";
// import Pizza from "./components/Pizza";

function App() {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Navbar carrito={carrito} total={total} />
      <Home />
      {/* <Pizza codPizza="p001" /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      {/* <Home
      // carrito={carrito}
      // setCarrito={setCarrito}
      // setTotal={setTotal}
      // total={total}
      /> */}
      <Footer />
    </>
  );
}

export default App;
