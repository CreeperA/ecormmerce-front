import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import { createHashHistory } from 'history'
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory()

export const store = createStore(createRootReducer(history), compose(applyMiddleware(routerMiddleware(history))))
