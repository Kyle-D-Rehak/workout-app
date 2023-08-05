"use client";
import React, { useEffect } from "react";
import firebase_app from "../firebase/config";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import setUpUser from "../firebase/auth/setup";
import { getFirestore } from "firebase/firestore";
import userExists from "../firebase/auth/userExists";

function Page() {
  const [name, setName] = React.useState("");
  const [increment, setIncrement] = React.useState("5");
  const [units, setUnits] = React.useState("LBS");
  const router = useRouter();
  const auth = useAuthContext();
  const app = firebase_app;

  useEffect(() => {
    (async () => {
      if (auth.user === null) {
        router.push("/signin");
      } else if (await userExists(auth)) {
        router.push("/");
      }
    })();
  }, [auth, router]);

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      await setUpUser(name, units, increment, auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    console.log(auth.user);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Set up your account to get started</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="displayName">
            <p>Display Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="displayName"
              id="displayName"
              placeholder="Display Name"
              className="text-black"
            />
          </label>
          <p>Units</p>
          <label htmlFor="units">
            <p>lbs</p>
            <input
              onClick={(e) => setUnits(e.target.value)}
              defaultChecked
              type="radio"
              id="unitsLbs"
              name="units"
              value="LBS"
            />
          </label>
          <label htmlFor="units">
            <p>kg</p>
            <input
              onClick={(e) => setUnits(e.target.value)}
              type="radio"
              id="unitsKg"
              name="units"
              value="KG"
            />
          </label>
          <label htmlFor="increment">
            <p>Minimum Weight Increment (between 1 and 10)</p>
            <input
              onChange={(e) => setIncrement(e.target.value)}
              required
              type="number"
              name="increment"
              id="increment"
              defaultValue="5"
              min="1"
              max="10"
              className="text-black"
            />
          </label>
          <button type="submit" onClick={handleForm}>
            Submit
          </button>
        </form>
      </div>
      <LogoutButton />
    </div>
  );
}

export default Page;
