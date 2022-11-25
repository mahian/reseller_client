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
        {path: 'my-products', element: <MyProducts/>},
        {path: 'all-products', element: <AllProducts/>},
        {path: 'all-users', element: <AllUsers/>},
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
