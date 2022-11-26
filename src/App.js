import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import Products from './components/product/Products';
import Signup from './components/Signup';
import MyProducts from './sellerDashboard/MyProducts';
import Main from './layout/Main';
import AddProduct from './sellerDashboard/AddProduct';
import AllProducts from './components/adminDashboard/AllProducts';
import AllUsers from './components/adminDashboard/AllUsers';
import AdminDashboard from './layout/AdminDashboard';
import Spinner from './utilities/Spinner';
import Error from './components/shared/Error';
import ProductsUnderTheCategory from './components/product/ProductsUnderTheCategory';
import PrivetRoute from './components/privetRoute/PrivetRoute';
import SellerRoute from './components/privetRoute/SellerRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {path: '/', element: <Home/>},
        {path: 'login', element: <Login/>},
        {path: 'signup', element: <Signup/>},
        {path: 'add-product', element: <AddProduct/>},
        {path: 'products', element: <Products/>},
        {path: 'products/:id', element: <ProductsUnderTheCategory/>},
        {path: 'my-products', element: <SellerRoute><MyProducts/></SellerRoute>},
        {path: 'all-products', element: <PrivetRoute><AllProducts/></PrivetRoute>},
        {path: 'spinner', element: <Spinner/>},
        {path: "*", element: <Error/>}
      ]
    },
    {
      path: 'dashboard', 
      element: <AdminDashboard/>,
      children: [
        {path: 'all-users', element: <AllUsers/>},
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
