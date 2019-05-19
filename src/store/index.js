import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composer);

export default store;

sagaMiddleware.run(rootSaga);
