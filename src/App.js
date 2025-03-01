import './App.css';
import Calculate from './components/header/calculate.jsx';
import Login from './components/header/Login.jsx';
import ManualLCA from './components/header/manualLCA.jsx';
import Home from './components/header/Navbaar.js';
import Layout from './layout/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
     path: "/",
     element: <Layout/>,
     children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/calculate",
        element: <Calculate/>
      },
      {
        path: "/manualLCA",
        element: <ManualLCA/>
      },
      {
        path: "/login",
        element: <Login/>
      },

        
      ]
    }
  ])

  return <>
  <RouterProvider router={router}/>
  </>
}


export default App;
