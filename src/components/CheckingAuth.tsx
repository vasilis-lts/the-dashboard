import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authState } from '../constants';
import useAuthState from '../hooks/useAuthState';

function CheckingAuth() {
  const { setAuthStatus } = useAuthState();
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const lsAuthStatus = localStorage.getItem('AuthState');
      if (lsAuthStatus) {
        setAuthStatus(authState.authenticated);
      } else {
        setAuthStatus(authState.anonymous);
        navigate('/login');
      }
    }, 1000)
  }, []);

  return <div>Checking Authorization...</div>;
}

export default CheckingAuth
