import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebase_app from "../config";

export default async function userExists(auth) {
  if (!auth.user) {
    return false;
  }

  const app = firebase_app;
  const db = getFirestore(app);

  const docRef = doc(db, "users", auth.user.uid);
  console.log("docRef: ", docRef);
  const docSnap = await getDoc(docRef);
  console.log("docSnap", docSnap);

  if (docSnap.exists()) {
    console.log("userExists: true");
    return Promise.resolve(true);
  } else {
    console.log("userExists: false");
    return Promise.resolve(false);
  }
}
