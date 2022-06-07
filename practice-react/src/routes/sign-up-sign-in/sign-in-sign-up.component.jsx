import './sign-in-sign-up.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import {signInWithGooglePopup} from '../../utils/firebase.utils'

const SignInSignUp = () => {
    console.log(signInWithGooglePopup)
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()  
    }
    return (
        <>
        <div className="sign-in-sign-up-container">
            <div className="sign-in-block-container">
                <h2>You already have an account?</h2>
            <FormInput  label="label"  type="text" value="name" /> 
            <FormInput  label="email"  type="email" value="email" /> 
            <FormInput  label="name"  type="text" hell="this"/> 
            <div className="sign-up-block-container">sign-in-here</div>
            <button className="my-button" onClick={signInWithGoogle}>sign In With Google</button>
        </div>
        </div>
        </>
    )

}

export default SignInSignUp