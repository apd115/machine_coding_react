import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/header.jsx'
import {Home} from './components/home.jsx'
import {Sidebar} from './components/sidebar.jsx'
import { AppLayout } from './appLayout/appLayout.jsx'
import { Posts } from './components/posts.jsx'
 

  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children:[{
        element:<Header/>,
        path:"header",
      },
      {
        element: <Home/>,
        path: "/",
      },
      {
        element: <Sidebar/>,
        path: "sidebar",
      },
      {
        element: <Posts/>,
        path: "posts:postId"

      }
    ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
