import './Item.css';
import {Link} from 'react-router-dom'

const Item = (prop) => {
  return (
    <div className='item'>
        <Link to={`/product/${prop.id}`}><img onClick={window.scrollTo(0,0)} src={prop.image}/></Link>
        <p>{prop.name}</p>
        <div className="item-prices">
            <div className="new-price">${prop.new_price}</div>
            <div className="old-price">${prop.old_price}</div>
        </div>
    </div>
  )
}

export default Item