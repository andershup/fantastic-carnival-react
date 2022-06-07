import Products from '../../components/products/products.component'
import SHOP_DATA from '../../products.js'
const Directory = () => {
    return (
        <>
        {SHOP_DATA.map((product) =>(
              <Products key={product.key} products={product.items}/>
        ))}
        <div>Directory Components</div>
        </>
    )
}

export default Directory