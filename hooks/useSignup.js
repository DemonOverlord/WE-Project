import { useState } from 'react'
import { auth, db } from '../firebase/config.js'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'
import { setDoc, doc } from 'firebase/firestore'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, username) => {
    setError(null)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // Update Profile
        await updateProfile(res.user, {
          displayName: username, 
          photoURL: `https://api.dicebear.com/8.x/bottts/svg?seed=${username.toLowerCase()}`
        })

        // Create User Document
        const ref = doc(db, 'users', res.user.uid)
        await setDoc(ref, {
          status: true,
          username,
          avatar: `https://api.dicebear.com/8.x/bottts/svg?seed=${username.toLowerCase()}`,
          servers: [],
          last: ''
        })
        
        // Dispatch Login Action
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, signup }
}
