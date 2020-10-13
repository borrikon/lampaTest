import {productsInfo} from "../helper/productsInfo";
import {ADD_TO_BASKET} from "./types";

const initialState = {
    products: productsInfo,
    basketProducts: []
}

export const productReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case ADD_TO_BASKET: return { ...state, basketProducts: state.basketProducts.concat(action.payload)}
        default: return state
    }
}