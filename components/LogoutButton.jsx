import React from 'react'
import signOutUser from '@/app/firebase/auth/signout'

const LogoutButton = () => {
  return (
    <button onClick={signOutUser}>Logout</button>
  );
}

export default LogoutButton