import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Employment from './pages/Employment';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Credits from './pages/Credits';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/employment',
    element: <Employment />,
  },
  {
    path: '/achievements',
    element: <Achievements />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/credits',
    element: <Credits />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Nav />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;


