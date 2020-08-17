import {
  ADDPRODUCT,
  DELETEPRODUCTBASKET
} from "../ActionType/BasketActionType";
import {
  INCREMENT,
  CHANGEVALUTE,
  CLEARSTATE
} from "../ActionType/PizzasActionType";
import { DECREMENT } from "../ActionType/PizzasActionType";
import { allPizza } from "../Util/pizzaData";

const initialState = {
  pizzas: [],
  allPizza,
  valute: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT: {
      return { ...state, pizzas: [action.pizza, ...state.pizzas] };
    }
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
    case DELETEPRODUCTBASKET: {
      const newBasketProduct = state.pizzas.filter(
        elem => elem.id !== action.id
      );
      return { ...state, pizzas: newBasketProduct };
    }
    case CHANGEVALUTE: {
      const newList = [];
      if (state.allPizza) {
        state.allPizza.forEach(elems => {
          state.pizzas.forEach(elem => {
            if (elem.id === elems.id) {
              newList.push({ ...elems, quantity: elem.quantity });
            }
          });
        });
      }

      const newListBasket = state.allPizza
        ? newList.map(elem => ({
            ...elem,
            price: state.valute ? elem.priceWithDOllar : elem.priceWithEuro
          }))
        : [];
      return { ...state, pizzas: newListBasket, valute: !state.valute };
    }
    case CLEARSTATE: {
      return { pizzas: [] };
    }
    default:
      return state;
  }
};
