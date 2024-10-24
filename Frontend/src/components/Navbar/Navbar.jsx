import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();

  const menuRef = useRef();

  const toggle_btn = (e) => {
    menuRef.current.classList.toggle("nav-list-visible");
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={() => navigate('/')}>
        <img src={assets.bag} />
        <h1>DressHub</h1>
      </div>
      <img className='nav-dropdown' onClick={toggle_btn} src={assets.nav_dropdown} />
      <ul ref={menuRef} className="nav-list">
        <li onClick={() => { setMenu("shop") }}><Link to={'/'}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to={'/mens'}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to={'/womens'}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to={'/kids'}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="cart-login">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src={assets.cart_icon} /></Link>
        <div className="cart-item-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar