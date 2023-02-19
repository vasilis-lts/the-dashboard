import React, { useState } from 'react';
import { TextField, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ScreenContainer from '../components/ScreenContainer';
import useAuthState from '../hooks/useAuthState';
import { authState } from '../constants';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled('div')(({ theme }) => ({
  padding: 20,
  height: "100%",
  overflowY: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  '& form': {
    width: "100%",
    maxWidth: 350,
  },
  '& form>*': {
    marginTop: 10
  },
  "& img": {
    margin: '0 auto'
  }
}));

const LoginScreen = () => {
  const { setAuthStatus } = useAuthState();
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('AuthState', authState.authenticated);
    setAuthStatus(authState.authenticated);
    navigate('/');
  };

  return (
    <ScreenContainer>
      <LoginContainer>
        <form key="esffe" className='flex-col' onSubmit={handleSubmit}>

          <img width={100} height={100} src={"/vite.svg"} alt="logo" />

          <Typography className='text-center' variant="h4">Login</Typography>
          <Typography className='text-center' variant="subtitle1">Please enter your credentials</Typography>

          <TextField
            key={'adwd'}
            label="Username"
            value={username}
            size="small"
            required
            onChange={e => setUsername(prev => e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            size="small"
            required
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </LoginContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;