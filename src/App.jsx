
import './App.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout'
import Gallery from "./components/Gallery"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Gallery />,
        },
        ,
        // {
        //   path: "",
        //   element: <Breadcrumb/>,
        // },
      
      ],
    },
  ]);


  return (

    <RouterProvider router={router} />
  
  )
}

export default App
