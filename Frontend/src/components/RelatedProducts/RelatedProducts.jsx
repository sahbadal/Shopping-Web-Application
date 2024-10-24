import './RelatedProducts.css'
import data_product from '../../assets/data.js';
import Item from '../Item/Item';

const RelatedProducts = () => {
    return (
        <div className='related-products'>
            <h1>RELATED PRODUCTS</h1>
            <div className="related-products-item">
                {data_product.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts