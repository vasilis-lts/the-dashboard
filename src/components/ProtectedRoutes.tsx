import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from './Header';
import MainDashboard from '../screens/MainDashboard/MainDashboard';
import Sidebar from './Sidebar';
import { Routes, Route, Outlet } from "react-router-dom";
import NoRouteMatch from '../screens/NoRouteMatch';
import UsersManagement from '../screens/UsersManagement/UsersScreen';

const MainContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

function ProtectedRoutes() {

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <MainContent id="mainContent" className='main-content'>
        <Header />
        <Routes>
          <Route path='/' element={<MainDashboard />} />
          <Route path="users" element={<UsersManagement />} />

          <Route path="*" element={<NoRouteMatch />} />
        </Routes>
        <Outlet />
      </MainContent>
    </Box>
  );
}

export default ProtectedRoutes
