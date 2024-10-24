import './Product.css'
import {ShopContext} from '../../context/ShopContext.jsx'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import Breadcrum from '../../components/Breadcrum/Breadcrum.jsx'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay.jsx'
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox.jsx'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts.jsx'

const Product = () => {

  const{all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product