// Product list page
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getProductList, addToCart } from '../../redux/actions/product';

// component for single item of list
import ProductListItem from '../../components/product/single_product';

import Layout from '../../components/Common/layout'


class ProductListClass extends React.Component {

    render() {

        let products_lists = this.props && this.props.productsList;
        return (
            <>
                <Layout>
                    <div className="product-wrapper-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="product_title">Product List</div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {products_lists.map((product, index) => {
                                    return (
                                        <div className='col-sm-12 col-md-3' key={"product_" + index}>
                                            <ProductListItem product={product}
                                                onAddToCartClicked={this.props.addToCart} key={index} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

const mapStateToProps = state => ({
    productsList: state.product.productsList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getProductList,
            addToCart
        },
        dispatch
    );
};

const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListClass);


export default ProductList;