import { useState } from 'react'
import { db } from '../firebase/config.js'
import { collection, addDoc, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import { useAuthContext } from './useAuthContext.js'

export const useCreateServer = () => {
  const [error, setError] = useState(null)
  const {user, dispatch, server} = useAuthContext()

  const create = async (name) => {
    setError(null)
    // Create User Document
    const ref = collection(db, 'groups')
    const { uid } = user
    const ref2 = doc(db, 'users', uid)
    await addDoc(ref, {
      name
    }).then((res) => {
      updateDoc(ref2, { last: res.id, servers: arrayUnion(res.id) })
      dispatch({ type: 'SERVER', payload: {last: res.id, servers: [...server.servers, res.id]} })
    })
    .catch((err) => {setError(err.message)})
  }

  const join = async (name) => {
    const { uid } = user
    const ref2 = doc(db, 'users', uid)
    updateDoc(ref2, { last: name, servers: arrayUnion(name) })
    dispatch({ type: 'SERVER', payload: {last: res.id, servers: [...server.servers, res.id]} })
  }

  return { error, create, join }
}
