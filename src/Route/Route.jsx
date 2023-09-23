import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layouts/MainLayOut';
import Home from '../Pagaes/Home/Home';
import Products from '../Pagaes/Products/Products';

const myCreatedRouter = createBrowserRouter([
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
          },
          {
            path: "/dashboard",
            element: <div>Dashboard</div>
          }
        ]
      }
])

export default myCreatedRouter;