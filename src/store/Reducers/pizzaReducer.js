import { allPizza } from "../Util/pizzaData";
import {
  INCREMENT,
  DECREMENT,
  CHANGEACTIVE,
  CHANGEVALUTE,
  CLEARSTATE
} from "../ActionType/PizzasActionType";
import { DELETEPRODUCTBASKET } from "../ActionType/BasketActionType";
import { ABOUTPAGEPRICE } from "../ActionType/AboutPageType";
const initialState = {
  pizzas: allPizza,
  valute: false,
  aboutPizzaPrice: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      const newPizzaListIncrement = state.pizzas.map(elem => ({
        ...elem,
        quantity:
          elem.id === action.id && action.increment === "increment"
            ? elem.quantity + 1
            : elem.quantity
      }));
      return { ...state, pizzas: newPizzaListIncrement };
    }
    case DECREMENT: {
      const newPizzaListDecrement = state.pizzas.map(elem => ({
        ...elem,
        quantity:
          elem.id === action.id && action.decrement === "decrement"
            ? elem.quantity - 1
            : elem.quantity
      }));
      return { ...state, pizzas: newPizzaListDecrement };
    }
    case CHANGEACTIVE: {
      const newPizzaList = state.pizzas.map(elem => ({
        ...elem,
        active: elem.id === action.id ? !elem.active : elem.active
      }));
      return { ...state, pizzas: newPizzaList };
    }
    case DELETEPRODUCTBASKET: {
      const newPizzaList = state.pizzas.map(elem => ({
        ...elem,
        quantity: elem.id === action.id ? 1 : elem.quantity
      }));
      return { ...state, pizzas: newPizzaList };
    }
    case CHANGEVALUTE: {
      return { ...state, valute: action.name === "dollar" ? false : true };
    }
    case ABOUTPAGEPRICE: {
      const newPrice = state.pizzas.filter(elem => elem.id === action.id);
      return {
        ...state,
        aboutPizzaPrice: {
          dollar: newPrice[0].priceWithDOllar,
          euro: newPrice[0].priceWithEuro
        }
      };
    }
    case CLEARSTATE: {
      const newList = state.pizzas.map(elem => ({
        ...elem,
        quantity: 1,
        active: false
      }));

      return { ...state, pizzas: newList };
    }
    default:
      return state;
  }
};
