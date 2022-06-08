import { useContext} from 'react'
import { ProductsContext }from '../../contexts/products.context'
import Manufacturer from '../manufacturer/manufacturer.component'

const ManufacturerPreview = () => {
    const { products } = useContext(ProductsContext)
    console.log(products)
    return (
        <>
        {products.map((product) => (
            <Manufacturer key={product.key} product={product}/>
        ))}
        <div>Manufacturerpreview</div>
        </>
    )
}

export default ManufacturerPreview 