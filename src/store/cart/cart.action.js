import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleCartAction = (bool) => {
    return createAction(CART_ACTION_TYPES.SET_CART_DROP_DOWN, bool)
}