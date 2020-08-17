import {
  INCREMENT,
  DECREMENT,
  CHANGEACTIVE,
  CHANGEVALUTE,
  CLEARSTATE
} from "../../ActionType/PizzasActionType";

export const changeActionIncrement = (id, increment) => ({
  type: INCREMENT,
  id,
  increment
});

export const changeActionDecrement = (id, decrement) => ({
  type: DECREMENT,
  id,
  decrement
});

export const changeActive = id => ({
  type: CHANGEACTIVE,
  id
});

export const changeValute = name => ({
  type: CHANGEVALUTE,
  name
});

export const clearStateAction = () => ({
  type: CLEARSTATE
});
