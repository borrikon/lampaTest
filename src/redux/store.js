import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))
store.subscribe(()=>{
    localStorage.setItem('basketState', JSON.stringify(store.getState().product.basketProducts))
    localStorage.setItem('totalState', JSON.stringify(store.getState().product.totalPrise))
})

