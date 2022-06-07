const ProductCard = ({product}) => {
    const { name, imageUrl, price } = product
    return (
        <>
        <div className="product-card-container">
        <h1>product card</h1>
        <img src={imageUrl} alt={`${name}`}/>
        <span>{name}</span>
        <span>{price}</span>
        </div>
        </>
    )
}

export default ProductCard