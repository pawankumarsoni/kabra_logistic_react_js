// Product list page
import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { getProductList } from '../../redux/actions/product';


class ProductListClass extends React.Component {

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        return (
            <>

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
            getProductList
        },
        dispatch
    );
};

const ProductList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListClass);


export default ProductList;