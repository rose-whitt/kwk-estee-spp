/**
 * This file renders the product overview
 *
 */
import React from 'react';
import ProductReviews from './ProductReviews';

class ProductOverview extends React.Component {
    // props is automatic
    constructor(props) {
        //super is needed for constructor
        super(props);

        // components use this.state to "remember" things 
        this.state = {
            quantity: 1,
            price: this.props.product.default_price,
            afterpay: this.props.product.default_afterpay
        }
    }

    /**
     * Triggers anytime a new size is selected
     * @param e
     */
    onSelectChange = (e) => {
        const selectedSize = this.props.product.sizes.find(size => {
            return size.label === e.target.value;
        })

        this.setState({
            price: selectedSize.price
        });
        
        document.getElementById("prod-price").innerHTML = selectedSize.price;
        document.getElementById("AFTRPAYTEXT").innerHTML = selectedSize.afterpay;
    }

    /**
     * On quantity add
     */
    addQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }   

    /**
     * On quantity subtract
     */
    subtractQuantity = () => {
        const { quantity } = this.state;

        this.setState({
            quantity: quantity === 1 ? 1 : quantity - 1
        })
    }

    render() {
        const { display_name1, display_name2, reviews, short_description, sizes, is_replenishable, default_price, default_afterpay } = this.props.product;

        return (
            <div className="elc-product-overview">
                <h1>{display_name1}</h1>
                <h4>{display_name2}</h4>
                <div className="product-review">
                    <button>
                        <ProductReviews reviews={reviews}/>
                    </button>
                </div>
                <div className="product-short-description">{short_description}</div>
                <div className="product-size">
                    <select name="cars" id="cars" onChange={this.onSelectChange}>
                        {sizes.map(size => {
                            return <option key={size.label} value={size.label}>{size.label}</option>
                        })}
                    </select>
                    <button className="drop-button-container">
                        <div className="dropdown-button-icon"></div>
                    </button>
                </div>
                <div id="prod-price" className="product-price">{default_price}</div>
                <div className="auto-repleneish-container">
                    <div className="auto-repleneish-top-container">
                        {is_replenishable && <div className="product-auto-replenish">Auto Replenish</div>}
                        <button className="info-button">
                            <div className="info"></div>
                        </button>
                    </div>
                    <div className="e-listers-text">E-Listers earn 15 points for each replenishment order!</div>
                </div>

                <div className="product-qty">
                    <div className="qty-text">QTY</div>
                    <div className="quantity buttons_added">
                    <input type="button" value="—" className="minus" ID="MINUS" onClick={this.subtractQuantity}/>
                    {/* <div className="filler1"></div> */}
                    <input type="number" step="1"
                            value={this.state.quantity}
                            title="Qty"
                            className="input-text qty text"
                            ID="QTYTEXT"/>
                    {/* <div className="filler2"></div> */}
                    <input type="button" value="＋" className="plus" ID="PLUS" onClick={this.addQuantity}/>
                    
                    </div>
                    <button className="add-to-bag">Add To Bag</button>
                </div>
                <div className="product-after-pay">
                    <img src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png" className="afterpay-icon"></img>
                    <button className="afterpay-info-button">
                        <div className="afterpay-info"></div>
                    </button>
                    <br></br>
                    <div className="afterpay-container">
                        <div id="AFT">Shop now and pay later with 4 payments of  
                            <div id="AFTRPAYTEXT" className="afterpay-text">{default_afterpay}</div>
                        </div>
                        
                    </div>
                </div>
                <div className="product-promo-message">Free Standard Shipping & Returns</div>
                <div className="bottom-container">
                    <div className="engrave">engrave this item</div>
                    <div className="share">share</div>
                </div>
            </div>
        );
    }
}

// Export out the React Component
export default ProductOverview;