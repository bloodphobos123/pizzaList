import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Block, Button } from "../../components/styledComponents";
import { getCheckedValute } from "../../store/Selectors/AllPizzaSelectors/getCheckedValute";

import {
  changeActionIncrement,
  changeActionDecrement,
  changeActive
} from "../../store/Action/PizzaAction";
import {
  addProductBasket,
  deleteproductinbasket
} from "../../store/Action/BasketAction";
import { getAboutPageSale } from "../../store/Action/AboutPageAction";

const PizzaItems = ({
  title,
  imgSrc,
  content,
  id,
  price,
  quantity,
  active
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkValute = useSelector(getCheckedValute);
  const handleClickToAboutPizza = () => {
    dispatch(getAboutPageSale(id));
    history.push({
      pathname: `/aboutpizza/:${id}`,
      state: {
        title: title,
        imgSrc: imgSrc,
        price: price,
        quantity: quantity,
        content: content,
        id: id,
        active: active
      }
    });
  };
  const handlePickupPrice = () => {
    const newProduct = {
      title,
      imgSrc,
      content,
      id,
      price,
      quantity
    };
    dispatch(addProductBasket(newProduct));
    dispatch(changeActive(id));
    if (active) {
      dispatch(deleteproductinbasket(id));
    }
  };

  const handleQuantityIncrement = name => {
    dispatch(changeActionIncrement(id, name));
  };
  const handleQuantityDecrement = name => {
    if (quantity > 1) {
      dispatch(changeActionDecrement(id, name));
    }
  };

  return (
    <>
      <Block width="calc(33% - 40px)" margin="15px" flex>
        <Block
          width="100%"
          radius="5%"
          flex
          direction="column"
          background="#d6d5c6"
        >
          <img
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "5% 5% 0 0"
            }}
            src={imgSrc}
            alt="pizza"
            onClick={() => handleClickToAboutPizza()}
          />
          <Text
            flex
            size="22px"
            junstifyContent="center"
            alignItems="center"
            align="center"
            padding="15px"
          >
            {title}
          </Text>

          <Block height="100px" padding="0 10px 0 10px">
            {content}
          </Block>

          <Block
            flex
            direction="row"
            width="80%"
            justifyContent="space-between"
            alignItems="center"
            padding="0 15px 20px 15px"
          >
            <Button
              flex
              size="15px"
              padding=" 0.25em 1em"
              border="1px solid grey"
              radius="3px"
              outline="none"
              background="white"
              name="decrement"
              cursor="pointer"
              onClick={e => handleQuantityDecrement(e.target.name)}
            >
              -
            </Button>
            <Block flex size="15px">
              {quantity}
            </Block>
            <Button
              flex
              size="15px"
              padding=" 0.25em 1em"
              border=" none"
              radius="3px"
              outline="none"
              background="white"
              name="increment"
              cursor="pointer"
              onClick={e => handleQuantityIncrement(e.target.name)}
              border="1px solid grey"
            >
              +
            </Button>
            <Button
              flex
              width="50%"
              size="15px"
              padding=" 0.25em 1em"
              border=" none"
              radius="3px"
              outline="none"
              background="white"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={handlePickupPrice}
              border="1px solid grey"
            >
              {!active ? "Add to card" : "Cancel"}
            </Button>
          </Block>
          <Block
            flex
            justifyContent="space-between"
            direction="row"
            alignItems="flex-end"
          >
            <Text size="20px" padding="0 15px 20px 15px">
              Price
            </Text>
            <Text size="25px" padding="0 15px 20px 15px">
              {price}
              {checkValute ? "€" : "$"}
            </Text>
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default PizzaItems;
