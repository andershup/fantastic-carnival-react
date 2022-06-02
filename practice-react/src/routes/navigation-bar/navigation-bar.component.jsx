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
        test text text text 
        <Link className='nav-link' to="/sign-in">Sign In</Link>
        </div>
        <Outlet/>
        </>
    )
}

export default NavigationBar