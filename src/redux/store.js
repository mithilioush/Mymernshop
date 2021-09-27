import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persiststore = persistStore(store)

export default store;