import { createStore, applyMiddleware, compose } from "redux"
import createDebounce from "redux-debounced"
import thunk from "redux-thunk"
import logger from 'redux-logger'
import rootReducer from "../reducers/rootReducer"

const middlewares = [ thunk, createDebounce(), logger ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export { store }
