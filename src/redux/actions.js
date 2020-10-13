import {ADD_TO_BASKET} from "./types";

export function addProductToBasket (productItem) {
    console.log('function works', productItem)
    return {
        type: ADD_TO_BASKET,
        payload: productItem
    }
}