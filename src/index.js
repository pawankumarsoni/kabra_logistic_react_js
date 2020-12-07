import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import { store, persistor } from "./helpers"

// Product Pages
import ProductList from './containers/product';
import ProductDetail from './containers/product/product';

// Cart Page
import Cart from './containers/cart';

// Error 404 Page
import PageNotFound from './containers/404';

// get all product list
import { getProductList } from './redux/actions/product';


class Root extends React.PureComponent {
    render() {
        store.dispatch(getProductList())
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/products" component={ProductList} />
                            <Route path="/products/:id" component={ProductDetail} />
                            <Route exact path="/view-cart" component={Cart} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </BrowserRouter >
                </PersistGate>
            </Provider>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();