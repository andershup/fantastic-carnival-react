import Products from '../../components/products/products.component'
// import ManufacturerPreview from '../../components/manufacturers-preview/manufacturers-preview.component'
import SHOP_DATA from '../../products.js'
import { Fragment} from 'react'
const Directory = () => {
    console.log(SHOP_DATA.key)
    return (
        <>
        {SHOP_DATA.map((product) =>(
            <Fragment key={product.key}>
              <Products key={product.key} products={product.items}/>
              {/* <ManufacturerPreview key={product.key} product={product}/> */}
              </Fragment>
        ))}
        <div>Directory Components</div>

        </>
    )
}

export default Directory