import React from "react";
import { Block } from "../styledComponents";
import { getBasketProducts } from "../../store/Selectors/BasketSelectors";
import { useSelector } from "react-redux";
import BasketItems from "./basketItems";
import { nanoid } from "nanoid";
import { getCheckedValute } from "../../store/Selectors/AllPizzaSelectors/getCheckedValute";
import SimpleModal from "../../modal";

const Currency = () => {
  const pizzas = useSelector(getBasketProducts);
  const checkValute = useSelector(getCheckedValute);
  const totalAmount = pizzas.reduce(
    (num, item) => num + +item.price * item.quantity,
    0
  );
  const deliverSum = checkValute ? 8 : 10;
  return (
    <Block
      width="100%"
      flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      padding="30px"
    >
      <Block>Card</Block>

      <Block
        width="100%"
        flex
        direction="column"
        justifyContent="space-between"
        size="15px"
      >
        {pizzas.length
          ? pizzas.map(elem => (
              <BasketItems
                key={nanoid()}
                title={elem.title}
                quantity={elem.quantity}
                price={elem.price}
              />
            ))
          : ""}
      </Block>
      <Block flex alignItems="flex-end">
        Delivery: {checkValute ? "+8€" : "+10$"}
      </Block>
      <Block width="100%" height="2px" background="black" />
      <Block>
        total:{totalAmount + deliverSum} {checkValute ? "€" : "$"}
      </Block>
      <SimpleModal total={totalAmount + deliverSum} />
    </Block>
  );
};

export default Currency;
