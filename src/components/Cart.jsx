import React, { useState } from "react";
import { pizzaCart } from "../datos/pizzas";
import { Button } from "@material-tailwind/react";
import { formatNumber } from "../utils/formatNumber";
import "../assets/css/styleCarrito.css";

const Cart = () => {
  const [productos, setProductos] = useState(pizzaCart);
  //   console.log(productos);

  const handleAgregar = (id) => {
    setProductos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );

    // productos[id].count++;
    // setProductos([...productos]);
  };

  const handleQuitar = (id) => {
    // productos[id].count--;
    // setProductos([...productos.filter((producto) => producto.count > 0)]);
    setProductos((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const orderTotal = productos.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  return (
    <>
      <div className="containerCarrito">
        <div>
          <h1>Carrito</h1>
        </div>
        <div>
          {productos.map((producto, id) => {
            return (
              <div className="rowAround" key={producto.id}>
                <div>
                  <img src={producto.img} width="50px" alt="" />
                </div>
                <div>{producto.name}</div>
                <div>${formatNumber(producto.price)}</div>
                <div>
                  <Button
                    className="bg-transparent text-green-600 border-solid border-green-600 mt-3"
                    onClick={() => handleAgregar(producto.id)}
                  >
                    +
                  </Button>
                </div>
                <div style={{ textAlign: "center" }}>{producto.count}</div>
                <div>
                  <Button
                    className="bg-transparent text-red-600 border-solid border-red-600 mt-3"
                    onClick={() => handleQuitar(producto.id)}
                  >
                    -
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: 24, paddingTop: 20 }}>
          Total: ${formatNumber(orderTotal)}
        </div>
        <div>
          <Button className="bg-black text-white border-solid border-black mt-3">
            Pagar
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
