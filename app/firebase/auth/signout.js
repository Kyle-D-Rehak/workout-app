import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
  signOut(auth)
    .then(() => {
      console.log("logout:", auth.user);
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
