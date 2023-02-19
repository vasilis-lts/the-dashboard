import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Routes, Route, Outlet } from "react-router-dom";
import LoginScreen from '../screens/Login';

const MainContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

function UnprotectedRoutes() {

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />

        <Route path="*" element={<LoginScreen />} />
      </Routes>
      <Outlet />
    </Box>
  );
}

export default UnprotectedRoutes
