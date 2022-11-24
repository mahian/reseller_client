import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {path: '/', element: <Home/>},
        {path: 'login', element: <Login/>},
        {path: 'signup', element: <Signup/>},
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
