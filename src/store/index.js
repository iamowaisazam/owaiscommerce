import {createStore,combineReducers,applyMiddleware,compose } from 'redux'
import  thunkMiddleware from 'redux-thunk'


//Reducers
import AuthReducer from './reducers/AuthReducer'
import CategoriesReducer from './reducers/CategoriesReducer'
import ProductsReducer from './reducers/ProductsReducer'
import CartsReducer from './reducers/CartsReducer'
import WishReducer from './reducers/WishReducer'
import AlertReducer from './reducers/AlertReducer'



const rootReducers = combineReducers({
        AuthReducer,
        CategoriesReducer,
        ProductsReducer,
        CartsReducer,
        WishReducer,
        AlertReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunkMiddleware)));


console.log(store.getState());

store.subscribe(() =>{
    console.log('Updated State value',store.getState());
})




export default store;