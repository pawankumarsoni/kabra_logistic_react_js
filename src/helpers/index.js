import { createStore, applyMiddleware } from "redux";
import { reducers } from "../redux/reducers";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { api } from "../services/api"

export const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({ api }), logger));

export const history = require("history").createHashHistory({

})