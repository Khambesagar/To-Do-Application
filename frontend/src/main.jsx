import './index.css'
import { StrictMode ,Suspense,lazy} from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Addtodo from './components/to-do/Add-todo'
import Updatetodo from './components/to-do/Update-todo'
import ContactForm from './components/ContactForm'
import Loader from './components/Loader'
import ProtectedRoute from './components/ProtectedRoute'
import LazyLoader from './components/Lazy-Loader'
import TodoDetails from './components/to-do/To-do-Details'

let LazyHome = lazy(()=> import('./components/Home'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },

      // Protected routes for both admin and user
      {
        element: <ProtectedRoute allowedRole={['admin', 'user']} />, 
        children: [
          { path: '/', element: <Suspense fallback = { <LazyLoader/>}> <LazyHome /> </Suspense>  },
          { path: '/navbar', element: <Navbar /> },
          { path: '/addtodo', element: <Addtodo /> },
          { path: '/updatetodo/:id', element: <Updatetodo /> },
          { path: '/contact', element: <ContactForm /> },
          { path: '/todoDetails/:id', element: <TodoDetails /> },
        ],
      },

      // Protected route for only admin
      // {
      //   element: <ProtectedRoute allowedRole={['admin']} />,
      //   children: [{ path: '/contact', element: <ContactForm /> }],
      // },

      {
        path: '/loader',
        element: <Loader />,
      },
      {
        path : '/lazyloading',
        element : <LazyLoader/>
      }
    ],
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
