import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from './context/AppContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a252a',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)













// import {
//   Outlet,
//   RouterProvider,
//   ReactRouter,
//   Link,
//   useParams,
//   RootRoute,
//   Route,
//   ErrorComponent,
//   createHashHistory,

// } from '@tanstack/react-router';

// const rootRoute = new RootRoute({ component: RouteContainer })

// const indexRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: MainDashboard
// })

// const routeTree = rootRoute.addChildren([
//   indexRoute,
// ])

// const hashHistory = createHashHistory()

// // Set up a ReactRouter instance
// const router = new ReactRouter({
//   history: hashHistory,
//   routeTree,
//   defaultPreload: 'intent',
// })

// // Register things for typesafety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }