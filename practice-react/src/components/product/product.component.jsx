import ProductCard from '../product-card/product-card.component'
const ProductComponent = ({product}) => {
    const {id} = product
    console.log(product)
    return (
        <div className="eh">
            <h1>ProductComponent</h1>
            <ProductCard key={id} product={product}/>
        </div>
    )
}

export default ProductComponent