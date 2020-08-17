import React from "react";
import { useSelector } from "react-redux";
import { Block, Button } from "../components/styledComponents";
import { getCheckedValute } from "../store/Selectors/AllPizzaSelectors/getCheckedValute";

const ModalItems = ({ price, title, quantity }) => {
  const checkValute = useSelector(getCheckedValute);
  return (
    <Block
      width="100%"
      height="30px"
      flex
      direction="row"
      size="12px"
      alignItems="center"
      justify-content="space-between"
    >
      <Block width="39%" flex alignItems="center">
        {title}
      </Block>

      <Block width="29%" flex alignItems="center">
        {`Pieces: ${quantity}`}
      </Block>

      <Block width="29%" flex alignItems="center">
        {price * quantity}
        {checkValute ? "€" : "$"}
      </Block>
    </Block>
  );
};

export default ModalItems;

// `${title} ${quantity} ${price}`;
