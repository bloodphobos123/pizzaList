import { combineReducers } from "redux";

import AllPizza from "./pizzaReducer";
import Basket from "./basketReducer";

const rootReducer = combineReducers({
  pizza: AllPizza,
  basket: Basket
});

export default rootReducer;
