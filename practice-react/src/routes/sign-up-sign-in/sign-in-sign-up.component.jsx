import './sign-in-sign-up.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import {signInWithGooglePopup} from '../../utils/firebase.utils'

const SignInSignUp = () => {
    console.log(signInWithGooglePopup)
    return (
        <>
        <div className="sign-in-sign-up-container">
            <div className="sign-in-block-container">
                <h2>You already have an account?</h2>
            <FormInput  label="email"  type="email" /> 
            <div className="sign-up-block-container">sign-in-here</div>
        </div>
        </div>
        </>
    )

}

export default SignInSignUp