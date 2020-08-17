import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Block, Text, Button } from "../components/styledComponents";
import { useDispatch, useSelector } from "react-redux";

import {
  changeActionIncrement,
  changeActionDecrement,
  changeActive
} from "../store/Action/PizzaAction";
import {
  addProductBasket,
  deleteproductinbasket
} from "../store/Action/BasketAction";
import { aboutPageSaleGet } from "../store/Selectors/AboutPageSelectors";
import { getCheckedValute } from "../store/Selectors/AllPizzaSelectors/getCheckedValute";

const AboutPizza = props => {
  const [quantity, setQuantity] = useState();
  const [active, setActive] = useState();

  const location = useLocation();
  const dispatch = useDispatch();
  const priceMain = useSelector(aboutPageSaleGet);
  const checkValute = useSelector(getCheckedValute);
  useEffect(() => {
    setQuantity(location.state.quantity);
    setActive(location.state.active);
  }, [location.state.quantity, location.state.active]);
  const handlePickupPrice = () => {
    const newProduct = {
      title: location.state.title,
      imgSrc: location.state.imgSrc,
      content: location.state.content,
      id: location.state.id,
      price: location.state.price,
      quantity: quantity,
      active: location.state.active
    };
    dispatch(addProductBasket(newProduct));
    dispatch(changeActive(location.state.id));
    if (active) {
      dispatch(deleteproductinbasket(location.state.id));
      setQuantity(1);
    }
    setActive(!active);
  };

  const handleQuantityIncrement = name => {
    setQuantity(quantity + 1);
    dispatch(changeActionIncrement(location.state.id, name));
  };
  const handleQuantityDecrement = name => {
    if (quantity > 1) {
      dispatch(changeActionDecrement(location.state.id, name));
      setQuantity(quantity - 1);
    }
  };
  return (
    <Block
      width="90% "
      height="100vh"
      flex
      directtion="row"
      justifyContent="space-between"
    >
      <Block
        width="70%"
        height="500px"
        flex
        radius="20px"
        overflow="hidden"
        margin="30px 0 0 30px"
      >
        <img width="100%" src={location.state.imgSrc} alt="pizza"></img>
      </Block>
      <Block
        width="25%"
        height="500px"
        flex
        direction="column"
        background="#d6d5c6"
        justifyContent="space-around"
        radius="10px"
        margin="30px 0 0 20px"
      >
        <Text center size="20px" margin="20px">
          {location.state.title}
        </Text>
        <Text padding="15px" box height="100px">
          {location.state.content}
        </Text>

        <Text size="35px" margin="20px">
          {checkValute ? priceMain.euro : priceMain.dollar}
          {checkValute ? "€" : "$"}
        </Text>
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
            border="none"
            radius="3px"
            outline="none"
            background="white"
            name="decrement"
            cursor="pointer"
            onClick={e => handleQuantityDecrement(e.target.name)}
            border="1px solid grey"
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
            border="1px solid grey"
            onClick={e => handleQuantityIncrement(e.target.name)}
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
      </Block>
    </Block>
  );
};

export default AboutPizza;
