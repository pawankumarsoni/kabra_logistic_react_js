import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <>
                <header id="sticky" className="sticky kabra-logistic-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-menu d-flex">
                                    <div className="menu-left">
                                        <Link to="/products">Products</Link>
                                    </div>
                                    <div className="icon-nav">
                                        <div className="pull-right">
                                            <ul>
                                                <li className="">
                                                    <Link to="/view-cart">Cart</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}


export default Header;

