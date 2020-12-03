import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from "./helpers"
import './index.css';
import reportWebVitals from './reportWebVitals';

// Product Pages
import ProductList from './containers/Product';
import ProductDetail from './containers/Product/product';

// Cart Page
import Cart from './containers/Cart';

// Error 404 Page
import PageNotFound from './containers/404';


class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={'/'} >
                    <Switch>
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path={`/products/:id`} component={ProductDetail} />
                        <Route exact path="/view-cart" component={Cart} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();