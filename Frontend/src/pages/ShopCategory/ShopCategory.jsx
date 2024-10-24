import { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../../context/ShopContext'
import {assets} from '../../assets/assets.js'
import Item from '../../components/Item/Item.jsx'

const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} className='shopCategory-banner'/>
      <div className="shopCategory-indexSort">
        <p>
          <span className='shopShowing'>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopCategory-sort">
         Sort by <img src={assets.dropdown_icon}/>
        </div>
      </div>
      <div className="shopCategory-products">
        {all_products.map((item,index)=>{
          if(props.category===item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory