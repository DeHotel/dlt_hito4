import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
// import "../assets/css/styleCard.css";
import { formatNumber } from "../utils/formatNumber";

const CardPizza = (props) => {
  const handleAgregarPizzaAlCarro = () => {
    // props.setTotal(Number(props.total) + Number(props.dato.price));
    // props.setCarrito([...props.carrito, props.dato]);
  };

  return (
    <Card className="max-w-96 flex-col">
      <CardHeader color="blue-gray" className="relative h-50">
        <img src={props.dato.img} alt="FotoPizza" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="ml-2 mt-2 mb-2 font-bold">
          Pizza {props.dato.name}
        </Typography>
        <hr />
        <Typography className="text-center text-1sm mt-5">
          🍕 Ingredientes:
        </Typography>
        <div className="text-center pb-5">
          <ul>
            {props.dato.ingredients.map((ingredient, id) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <hr />
        <Typography className="text-center text-1xl font-bold mt-3 mb-3">
          Precio: ${formatNumber(props.dato.price)}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-between p-5">
        <Button className="bg-white text-black border-solid border-black">
          Ver más 👀
        </Button>
        <Button
          className="bg-black text-white border-solid border-black"
          // onClick={handleAgregarPizzaAlCarro}
        >
          Añadir 🛒
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardPizza;
