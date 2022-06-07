import { Routes, Route } from 'react-router-dom'
import { CategoryPreview } from '../../components/category-preview/category-preview.component'
import { Category } from '../../components/category/category.component'
const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=':category' component={<Category />} />
        </Routes>
    )
}

export default Shop