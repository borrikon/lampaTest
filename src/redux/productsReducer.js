import {productsInfo} from "../helper/productsInfo";
import {
    ADD_COUNT_PRODUCT,
    ADD_TO_BASKET,
    ADD_TOTAL_PRISE,
    DECREMENT,
    DELETE_ITEM, GET_PRODUCT_FAILURE, GET_PRODUCT_LIST,
    GET_PRODUCT_SUCCESS,
    INCREMENT
} from "./types";

const persistedStateBasket = localStorage.getItem('basketState')
                        ? JSON.parse(localStorage.getItem('basketState'))
                        : []

const  persistedStateTotal = localStorage.getItem('totalState')
                            ? JSON.parse(localStorage.getItem('totalState'))
                            : 0
const initialState = {
    products:  productsInfo,
    basketProducts: persistedStateBasket,
    totalPrise: persistedStateTotal,
    form: {},
    loading: false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCT_LIST: return { ...state, loading: true}
        case GET_PRODUCT_SUCCESS: return { ...state, products: action.payload, loading: false}
        case GET_PRODUCT_FAILURE: return { ...state, loading: false}
        case ADD_TO_BASKET: return { ...state, basketProducts: state.basketProducts.concat(action.payload)}
        case ADD_TOTAL_PRISE: return  { ...state, totalPrise: action.payload}
        case ADD_COUNT_PRODUCT: return  { ...state,  basketProducts: action.payload}
        case INCREMENT: return { ...state, basketProducts: state.basketProducts.map(item => {
            if(item.id === action.payload){
                item.count ++
                }
            return item
            }) }
        case DECREMENT: return { ...state, basketProducts: state.basketProducts.map((item, i) => {
                if(item.id === action.payload){
                    if(item.count < 1){

                    }else {
                        item.count--
                    }
                }
                return item
            }) }
        case DELETE_ITEM: return { ...state, basketProducts: state.basketProducts.filter(item => item.id !== action.payload)}
        default: return state
    }
}