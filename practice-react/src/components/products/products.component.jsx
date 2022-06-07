import ProductComponent from '../product/product.component
import SHOP_DATA from '../../products.js' 

const Products = () => {
    return (
    <>
    {SHOP_DATA.map((product) =>(
        <ProductComponent key={product.id} product={product}/>
    ))}

    </>
    )
}

export default Products