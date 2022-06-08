import { Routes, Route } from 'react-router-dom'
import  ManufacturerPreview from '../../components/manufacturers-preview/manufacturers-preview.component'
import Manufacturer from '../../components/manufacturer/manufacturer.component'
const Shop = () => {
    return (
        <Routes>
            <Route index element={<ManufacturerPreview />} />
            <Route path=':manufacturer-preview' component={<Manufacturer />} />
        </Routes>
    )
}

export default Shop