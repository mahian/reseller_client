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
import SellerRoute from './components/privetRoute/SellerRoute';
import AdminRoute from './components/privetRoute/AdminRoute';
import SellerDashboard from './layout/SellerDashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {path: '/', element: <Home/>},
        {path: 'login', element: <Login/>},
        {path: 'signup', element: <Signup/>},
        {path: 'products', element: <Products/>},
        {path: 'products/:id', element: <ProductsUnderTheCategory/>},
        {path: 'spinner', element: <Spinner/>},
        {path: "*", element: <Error/>}
      ]
    },
    {
      path: 'dashboard', 
      element: <AdminRoute><AdminDashboard/></AdminRoute>,
      children: [
        {path: 'all-users', element: <AdminRoute><AllUsers/></AdminRoute>},
        {path: 'all-products', element: <AdminRoute><AllProducts/></AdminRoute>},
      ]
    },
    {
      path: 'seller-dashboard',
      element: <SellerRoute><SellerDashboard/></SellerRoute>,
      children: [
        {path: 'add-product', element: <SellerRoute><AddProduct/></SellerRoute>},
        {path: 'my-products', element: <SellerRoute><MyProducts/></SellerRoute>},
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
