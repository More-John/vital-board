import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config'
import { useNavigate } from 'react-router-dom'


export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
      if (!user) navigate('/login')
    })

    return unsubscribe
  }, [navigate])

  // Function to sign in with Google
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // You can access additional user info here:
      const credential = googleProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = googleProvider.credentialFromError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Function to log in a user with email and password

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw error
    }
  }
  // Function to log out the user
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return { user, loading, login, logout, signInWithGoogle }
}