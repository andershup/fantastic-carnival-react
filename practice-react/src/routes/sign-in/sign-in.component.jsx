import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn =  () => {
    const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
    }
    return (
        <>
        <button onClick={signInWithGoogle}>Sign in wiht google</button>
        </>
    )
}

export default SignIn