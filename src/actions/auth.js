import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from "../types/types"


export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, googleAuthProvider ) 
            .then(( { user }) =>{
                console.log(user)
                dispatch( login( user.uid, user.displayName))
            })
    }
}