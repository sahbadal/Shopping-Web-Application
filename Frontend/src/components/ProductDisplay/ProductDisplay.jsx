import './ProductDisplay.css'
import { assets } from '../../assets/assets.js'
import { useContext } from 'react';
import {ShopContext} from '../../context/ShopContext.jsx'

const ProductDisplay = (props) => {
    const { product } = props;

    const {addToCart} = useContext(ShopContext);

    return (
        <div className="container">
            <div className='product-display'>
                <div className="product-display-left">
                    <div className="product-display-img-list">
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                    </div>
                    <div className="product-display-img">
                        <img src={product.image} className='product-display-main-img' />
                    </div>
                </div>
                <div className="product-display-right">
                    <h1>{product.name}</h1>
                    <div className="product-display-right-star">
                        <img src={assets.star_icon} />
                        <img src={assets.star_icon} />
                        <img src={assets.star_icon} />
                        <img src={assets.star_icon} />
                        <img src={assets.star_dull_icon} />
                        <p>(122)</p>
                    </div>
                    <div className="product-display-right-prices">
                        <div className='product-display-right-price-old'>${product.old_price}</div>
                        <div className='product-display-right-price-new'>${product.new_price}</div>
                    </div>
                    <div className="product-display-right-description">
                        A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                    </div>
                    <div className="display-right-size">
                        <h1>Select Size</h1>
                        <div className="product-display-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <p className="product-display-right-category"><span>Category:</span>Women , T-Shirt, Crop Top </p>
                        <p className="product-display-right-category"><span>Tags:</span>Modern, Latest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay