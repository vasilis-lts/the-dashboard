import './App.scss'
import CheckingAuth from './components/CheckingAuth';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuthState from './hooks/useAuthState';
import LoginScreen from './screens/Login'

function App() {
  const { AuthStatus } = useAuthState();

  if (AuthStatus === 'anonymous') {
    return <LoginScreen />
  }

  if (AuthStatus === 'checkingAuth') {
    return <CheckingAuth />
  }

  return (
    <div className="App">
      <ProtectedRoutes />
    </div>
  )
}

export default App
