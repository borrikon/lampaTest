import {
    ADD_COUNT_PRODUCT,
    ADD_TO_BASKET,
    ADD_TOTAL_PRISE,
    DECREMENT,
    DELETE_ITEM, GET_PRODUCT_FAILURE,
    GET_PRODUCT_LIST, GET_PRODUCT_SUCCESS,
    INCREMENT, SEND_DATA_FAILURE, SEND_DATA_SUCCESS, SENS_DATA_START
} from "./types";
import axios from "axios";

export function addProductToBasket (productItem) {
    return {
        type: ADD_TO_BASKET,
        payload: productItem
    }
}
export function addTotalPrise (prise) {
    return {
        type: ADD_TOTAL_PRISE,
        payload: prise
    }
}
export function addCountProduct (item) {
    return {
        type: ADD_COUNT_PRODUCT,
        payload: item
    }
}
export function increment (id) {
    return {
        type: INCREMENT,
        payload: id
    }
}
export function decrement (id) {
    return {
        type: DECREMENT,
        payload: id
    }
}
export function deleteBasketProd (id) {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}
export const getProductList = () => {
    return dispatch => {
        dispatch(addProductStarted());
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                throw new Error('NO REAL API');
                dispatch(addProductSuccess(res.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(addProductFailure(err.message));
            });
    };
}
function addProductSuccess(list) {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: JSON.parse(list)
    }
}
function addProductStarted (){
   return {
       type: GET_PRODUCT_LIST
   }
}
function addProductFailure(error){
    return {
        type: GET_PRODUCT_FAILURE,
        payload: {
            error
        }
    }
}
export function sendUserData(data){
    return dispatch => {
        dispatch(sendDataStart())
        axios
            .post('/firebase', data)
            .then(res=>{
                dispatch(sendDataSuccess())
            })
            .catch(err=>{
                dispatch(sendDataFailure(err))
            })
    }
}
function sendDataStart() {
    return{
        type: SENS_DATA_START
    }
}
function sendDataSuccess() {
    return {
        type: SEND_DATA_SUCCESS
    }
}
function sendDataFailure(err) {
    return {
        type: SEND_DATA_FAILURE,
        payload: err
    }
}