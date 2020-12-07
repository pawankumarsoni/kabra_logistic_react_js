import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


class ProductListItem extends Component {

    render() {

        const { product, onAddToCartClicked } = this.props;

        // Creating 5 start rating starts array
        let RatingStars = []
        for (var i = 0; i < product.rating; i++) {
            RatingStars.push(<i className="fa fa-star checked" key={"rate_" + i}></i>)
        }
        for (var i = 0; i < 5 - product.rating; i++) {
            RatingStars.push(<i className="fa fa-star" key={"rate_0" + i}></i>)
        }

        return (
            <>
                <div className="product-box">
                    <div className="img-wrapper">
                        <div className="front">
                            <Link to={'/products/' + product.id} >
                                <div className="product-bg-img" style={{ background: `url(${product.filename})` }}>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="product-detail">
                        <div className="product-min-desc">
                            <div className="rating-cart">
                                <div className="rating">
                                    {RatingStars}
                                </div>
                                <div className="cart-info cart-wrap">
                                    <button title="Add to cart" className="add-to-cart" onClick={() => onAddToCartClicked(product, 1)}>
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Link to={'/product/' + product.id} className="width-70">
                                    <div className="product-name">{product.title}</div>
                                </Link>
                                <div className="tooltip" style={{ display: "contents" }}>
                                    <span style={{ background: 'orange', padding: '5px' }}>description</span>
                                    <span className="tooltiptext m-20">{product.description}</span>
                                </div>
                            </div>
                            <div className="product-price">{product.price}</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ProductListItem;