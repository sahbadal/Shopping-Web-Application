import './Breadcrum.css';
import {assets} from '../../assets/assets.js'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={assets.breadcrum_arrow}/> SHOP <img src={assets.breadcrum_arrow}/> {product.category} <img src={assets.breadcrum_arrow}/> {product.name}
    </div>
  )
}

export default Breadcrum