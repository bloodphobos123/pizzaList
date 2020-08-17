import {
  ADDPRODUCT,
  DELETEPRODUCTBASKET
} from "../../ActionType/BasketActionType";

export const addProductBasket = pizza => ({
  type: ADDPRODUCT,
  pizza
});

export const deleteproductinbasket = id => ({
  type: DELETEPRODUCTBASKET,
  id
});
