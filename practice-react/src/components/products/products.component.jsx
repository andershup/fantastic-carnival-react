import ProductComponent from '../product/product.component'

import { Fragment } from 'react'

const Products = ({products}) => {
    // console.log(products)
    return (
    <>
    {products.map((product) =>(
         <Fragment key={product.id}>
        <ProductComponent key={product.id} product={product}/>
       
       
        </Fragment>
    ))}
    <div>Products</div>
    </>
    )
}

export default Products