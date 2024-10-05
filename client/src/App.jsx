
import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './Pages/Home';
import List from './Pages/List';
import Layout from './Components/Layout/Layout';
import Slider from './Components/Slider';
import Default from './Pages/Default';
import Profile from './Pages/Profile';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import { AuthProvider } from './Context/Auth';
import Protected from './Protected/ProtectedRoutes';
import Single from './Pages/Single';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/list',
          element: <List />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/profile/:id',
          element: 
         
          <Protected
          element={
            <Profile />
          }
          />

        },
        {
          path: '/post/:id',
          element: <Single/>
        },
       

      ]
         
    },
    {
      path: '/slider',
      element: <Slider />
    },
    {
      path: '*',
      element: <Default />
    },
         
   
    
  ]);
  
  return(
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  );



}

export default App
