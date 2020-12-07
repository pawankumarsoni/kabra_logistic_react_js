// Product Detail page
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addToCart, getProductList } from '../../redux/actions/product';

// component for single item of list
import ProductDetail from '../../components/product/product_detail';

import Layout from '../../components/Common/layout'


class ProductDetailClass extends React.Component {


    render() {
        const { item, addToCart } = this.props

        return (
            <Layout>
                <div>
                    {(item) ?
                        <section >
                            <div className="collection-wrapper">
                                <div className="container">
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <div className="product_title">{item.title}</div>
                                        </div>
                                        <div className="col-lg-6 product-thumbnail">
                                            <img src={`${item.filename}`} className="img-fluid image_zoom_cls-0" />
                                        </div>
                                        <ProductDetail item={item} addToCartClicked={addToCart} />
                                    </div>
                                </div>
                            </div>
                        </section> : ''}
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.product.productsList.find(el => el.id == productId)
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getProductList,
            addToCart
        },
        dispatch
    );
};

const ProductDetailPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailClass);


export default ProductDetailPage;