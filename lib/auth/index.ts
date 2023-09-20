import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../providers/firebase'
import logger from '../logger'
import { globalStore } from '../store'

export const initializeAuth = () => {
  logger.log('Initialize auth')

  globalStore.setState({
    loading: true,
  })
}

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

auth.onAuthStateChanged((user) => {
  let currentUser = null

  if (user) {
    currentUser = {
      name: user.displayName || 'Usuario',
      id: user.uid,
    }
  }

  globalStore.setState({
    user: currentUser,
    loading: false,
  })
})

export const login = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    logger.error('error', error)
  }
}

export const logout = async () => {
  try {
    auth.signOut()
  } catch (error) {
    logger.error('error', error)
  }
}

export default auth
