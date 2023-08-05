import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from "../config";
import { useRouter } from "next/navigation";

export default async function setUpUser(name, units, increment, auth) {
  const app = firebase_app;
  const db = getFirestore(app);

  const userRes = await setDoc(doc(db, "users", auth.user.uid), {
    units: units,
    increment: increment,
    displayName: name,
  });

  //   if (userRes.error) {
  //     console.log(userRes);
  //     throw new Error(userRes.error);
  //   }
}
