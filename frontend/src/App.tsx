import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Projects from './routes/Projects';
import About from './routes/About';
import Resume from './routes/Resume';
function App() {

 const router = createBrowserRouter([
   {
     path: '/',
     element: <Root />,
     errorElement: <ErrorPage />,
     children: [
       { path: '/about', element: <About /> },
       { path: '/projects', element: <Projects /> },
       { path: '/resume', element: <Resume /> },
     ],
   },
 ]);

 return <RouterProvider router={router} />;
}

export default App
