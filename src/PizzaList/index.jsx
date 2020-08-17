import React from "react";
import { useSelector } from "react-redux";
import { getAllPizzas } from "../store/Selectors/AllPizzaSelectors/getAllPizzas";
import PizzaItems from "./PizzaItems.jsx/PizzaItems";
import { Block } from "../components/styledComponents";
import { getCheckedValute } from "../store/Selectors/AllPizzaSelectors/getCheckedValute";

const PizzaList = () => {
  const allPizzas = useSelector(getAllPizzas);
  const checkValute = useSelector(getCheckedValute);
  return (
    <Block width="100%" flex direction="row" wrap="wrap">
      {allPizzas.map(elem => (
        <PizzaItems
          title={elem.title}
          key={elem.id}
          imgSrc={elem.img}
          id={elem.id}
          price={checkValute ? elem.priceWithEuro : elem.priceWithDOllar}
          quantity={elem.quantity}
          content={elem.content}
          active={elem.active}
        />
      ))}
    </Block>
  );
};

export default PizzaList;
