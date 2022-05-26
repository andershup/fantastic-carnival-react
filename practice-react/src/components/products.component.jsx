import ProductComponent from "./product.component"
import productList from '../products.json'

const Products = () => {
    return (
    <>
    {productList.map((product) =>(
        <ProductComponent key={product.id} product={product}/>
    ))}

    </>
    )
}

export default Products