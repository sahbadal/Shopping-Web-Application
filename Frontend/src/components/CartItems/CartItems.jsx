import './CartItems.css';
import { ShopContext } from '../../context/ShopContext.jsx';
import { useContext } from 'react';
import { assets } from '../../assets/assets.js';

const CartItems = () => {
    const { all_products, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className="cart-items-title">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id}>
                            <div className="cart-items-format cart-items-title">
                                <img src={item.image} className='cart-items-format-image' />
                                <p>{item.name}</p>
                                <p className='cart-items-price'>${item.new_price}</p>
                                <button className='cart-items-quantity'>{cartItems[item.id]}</button>
                                <p className='cart-items-price'>${item.new_price * cartItems[item.id]}</p>
                                <img className='cross' src={assets.cart_cross_icon} onClick={() => removeFromCart(item.id)} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
              <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default CartItems;
