import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider,  } from 'react-router-dom'
// import MainLayOut from './Layouts/MainLayOut'
// import Home from './Pagaes/Home/Home'
// import Products from './Pagaes/Products/Products'
import myCreatedRouter from './Route/Route'

/* const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>This is my  first home route</div>
  },
  {
    path: "/products",
    element: <div>Products rout hit</div>
  }
]) */

// const myCreatedRouter = createBrowserRouter ([
//   {
//     path: "/",
//     element:<section>
//       <div>This is a fixed</div>
//       <Outlet></Outlet>

//     </section> ,
//     children: [
//       {
//         path: "/",
//         element: <div>This is home router</div>
//       },
//       {
//         path: "/products",
//         element: <div>Products page</div>
//       }
//     ]
//   }
// ])


/* const myCreatedRouter = createBrowserRouter ([
  {
    path: "/",
    element:<MainLayOut></MainLayOut> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>
      }
    ]
  }
]) */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
