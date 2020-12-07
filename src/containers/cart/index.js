// Cart items list page
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// get total price of cart items
import { getCartTotal } from "../../services";
import { removeFromCart, incrementQty, decrementQty } from '../../redux/actions/product'
import Layout from '../../components/Common/layout'


class cartComponent extends Component {

    render() {

        const { cartItems, total } = this.props;
        return (
            <Layout>
                {cartItems.length > 0 ?
                    <section className="cart-section section-b-space">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 product_title">
                                    <table className="table cart-table table-responsive-xs">
                                        <thead>
                                            <tr className="table-head">
                                                <th scope="col" className="hide-xs">image</th>
                                                <th scope="col">product name</th>
                                                <th scope="col" className="hide-xs">price</th>
                                                <th scope="col">quantity</th>
                                                <th scope="col">action</th>
                                                <th scope="col">total</th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((item, index) => {
                                            return (
                                                <tbody key={index}>
                                                    <tr>
                                                        <td className="hide-xs">
                                                            <Link to={`/products/${item.id}`}>
                                                                <img src={item.filename} alt="" />
                                                            </Link>
                                                        </td>
                                                        <td><Link to={`/products/${item.id}`}>{item.title}</Link>
                                                            <div className="mobile-cart-content row">
                                                                <div className="col-xs-3">
                                                                    <div className="qty-box">
                                                                        <div className="input-group">
                                                                            <input type="text" name="quantity"
                                                                                className="form-control input-number" defaultValue={item.qty} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-3">
                                                                    <h2 className="td-color">{item.price}</h2>
                                                                </div>
                                                                <div className="col-xs-3">
                                                                    <h2 className="td-color">
                                                                        <a href="#" className="icon" onClick={() => this.props.removeFromCart(item)}>
                                                                            <i className="fa fa-trash delete-item"></i>
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="hide-xs"><h2 className="m-t-25">{item.price}</h2></td>
                                                        <td>
                                                            <div className="qty-box m-t-20">
                                                                <div className="input-group">
                                                                    <span className="input-group-prepend">
                                                                        <button type="button" className="btn quantity-left-minus" onClick={() => this.props.decrementQty(item.id)} data-type="minus" data-field="">
                                                                            <i className="fa fa-angle-left"></i>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number text-center" />

                                                                    <span className="input-group-prepend">
                                                                        <button className="btn quantity-right-plus" onClick={() => this.props.incrementQty(item, 1)} data-type="plus">
                                                                            <i className="fa fa-angle-right"></i>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="icon" onClick={() => this.props.removeFromCart(item)}>
                                                                <i className="fa fa-trash delete-item"></i>
                                                            </a>
                                                        </td>
                                                        <td><h2 className="td-color m-t-25">{item.sum}</h2></td>
                                                    </tr>
                                                </tbody>)
                                        })}
                                    </table>
                                    <table className="table cart-table table-responsive-md">
                                        <tfoot>
                                            <tr>
                                                <td className="total-price">total price :</td>
                                                <td><h2>{total} </h2></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="cart-section section-b-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div >
                                        <div className="col-sm-12 product_title text-center">
                                            <h3>
                                                <strong>Your Cart is Empty</strong>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </Layout>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.product.cart,
    total: getCartTotal(state.product.cart)
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { removeFromCart, incrementQty, decrementQty },
        dispatch
    );
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(cartComponent)