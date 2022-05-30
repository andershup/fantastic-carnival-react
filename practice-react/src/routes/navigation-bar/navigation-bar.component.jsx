import './navigation-bar.styles.scss'
import { Outlet} from 'react-router-dom'
const NavigationBar = () => {

    return (
        <>
        <div className="navigation">
        test text 
        </div>
        <Outlet/>
        </>
    )
}

export default NavigationBar