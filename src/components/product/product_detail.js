import React, { Component } from 'react';


class ProductDetailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    minusQty = () => {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    plusQty = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }

    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render() {
        const { item, addToCartClicked } = this.props
        let { quantity } = this.state;
        // Creating 5 start rating starts array
        let RatingStars = []
        for (var i = 0; i < item.rating; i++) {
            RatingStars.push(<i className="fa fa-star checked" key={"rate_0" + i}></i>)
        }
        for (var i = 0; i < 5 - item.rating; i++) {
            RatingStars.push(<i className="fa fa-star" key={"rate_1" + i}></i>)
        }

        return (
            <div className="col-lg-6 rtl-text">
                <div className="single-product-detail product-right product-single-price m-tb-20">
                    <h3 className="m-t-20">{item.price} </h3>
                    <div className="product-description border-product product-q">
                        <h6 className="product-title m-t-20">quantity</h6>
                        <div className="qty-box m-t-20">
                            <div className="input-group">
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </span>
                                <input type="text" name="quantity" value={quantity} onChange={this.changeQty} className="form-control input-number" />
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-buttons m-t-20" >
                        <a className="btn btn-solid product-q" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>                    </div>
                    <div className="border-product m-t-20">
                        <h6 className="product-title">product details</h6>
                        <p>{item.description}</p>
                    </div>
                    <div className="rating">
                        {RatingStars}
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductDetailComponent;