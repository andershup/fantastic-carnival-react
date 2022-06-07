import ProductComponent from '../product/product.component'
 

const Products = ({products}) => {
    // console.log(products)
    return (
    <>
    {products.map((product) =>(
        <ProductComponent key={product.id} product={product}/>
    ))}
    <div>Products</div>
    </>
    )
}

export default Products