const ProductComponent = ({product}) => {
    const {id, name} = product
    return (
        <div className="eh">
            <h1>{id}</h1>
            <p>{name}</p>
        </div>
    )
}

export default ProductComponent