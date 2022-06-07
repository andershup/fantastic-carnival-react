import './navigation-bar.styles.scss'
import { Outlet, Link} from 'react-router-dom'
import { ReactComponent as Logo } from'../../assets/disc.svg'
const NavigationBar = () => {

    return (
        <>
        <div className="navigation">
        <Link className="logo" to="/">
        <Logo className="actual-logo"/>
            </Link> 
        <Link className='nav-link' to="/sign-in">Sign In</Link>
        <Link className='shop' to="/shop">Shop</Link>
        </div>
        <Outlet/>
        </>
    )
}

export default NavigationBar