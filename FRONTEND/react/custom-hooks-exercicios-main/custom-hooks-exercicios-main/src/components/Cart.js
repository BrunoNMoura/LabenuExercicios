import { useState } from "react";
import { Item } from "./Item";

export const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={0}
        onIncrement={quantity.somar}
        onDecrement={quantity.subtrair}
        onReset={quantity.reset}
      />
    </div>
  );
};
