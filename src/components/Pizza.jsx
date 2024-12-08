import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { formatNumber } from "../utils/formatNumber";

const Pizza = (props) => {
  const [pizza, setPizza] = useState("");
  const [consultar, setConsultar] = useState(true);
  const url = "http://localhost:5000/api/";

  useEffect(() => {
    async function consultaPizza() {
      try {
        const respuesta = await fetch(url + "pizzas/" + props.codPizza);
        const result = await respuesta.json();
        setPizza(result);
        setConsultar(false);
      } catch {
        console.error("Error consultando la Pizza: ", error);
      }
    }
    consultar && consultaPizza();
  }, [consultar]);

  return (
    <div className="mt-10 mb-10 flex justify-center align-middle">
      <Card className="max-w-96 flex-col">
        <CardHeader color="blue-gray" className="relative h-50">
          <img src={pizza.img} alt="FotoPizza" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className="ml-2 mt-2 mb-2 font-bold">
            Pizza {pizza.name}
          </Typography>
          <Typography variant="h2" className="ml-2 mt-2 mb-2">
            Pizza {pizza.desc}
          </Typography>
          <hr />
          <Typography className="text-center text-1sm mt-5">
            🍕 Ingredientes:
          </Typography>
          <div className="text-center pb-5">
            <ul>
              {pizza.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <Typography className="text-center text-1xl font-bold mt-3 mb-3">
            Precio: ${formatNumber(pizza.price ? pizza.price : 0)}
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
    </div>
  );
};

export default Pizza;
