import { createStore, applyMiddleware } from "redux";
import { reducers } from "../redux/reducers";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { api } from "../services/api"

// implementing persistance storage
const persistConfig = {
    key: 'reducer',
    storage,
    blacklist: []
};

const presistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(presistedReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api }), logger)));
const persistor = persistStore(store);


export { persistor, store };
export const history = require("history").createHashHistory({

})