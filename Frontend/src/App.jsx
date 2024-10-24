import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';
import Shop from './pages/Shop/Shop.jsx'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp.jsx';
import Footer from './components/Footer/Footer.jsx';
import { assets } from './assets/assets.js';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={assets.banner_mens} category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={assets.banner_women} category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={assets.banner_kids} category="kid" />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<LoginSignUp />}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App