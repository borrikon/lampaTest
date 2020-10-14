import {productsInfo} from "../helper/productsInfo";
import {ADD_TO_BASKET} from "./types";

const persistedState = localStorage.getItem('basketState')
                        ? JSON.parse(localStorage.getItem('basketState'))
                        : []
const initialState = {
    products: productsInfo,
    basketProducts: persistedState
}

export const productReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case ADD_TO_BASKET: return { ...state, basketProducts: state.basketProducts.concat(action.payload)}
        default: return state
    }
}