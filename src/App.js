import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './layout/Main';
import AddProduct from './sellerDashboard/AddProduct';

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
