import { combineReducers, legacy_createStore } from "redux";
import { CartReducer } from "./redux/reducer/CartReducer";
import StudentReducer from "./redux/reducer/StudentReducer";


const reducer = combineReducers({
  cart: CartReducer,
  student: StudentReducer
})

export const store = legacy_createStore(reducer)