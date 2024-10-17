import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
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

function Root() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/education'} element={<Education/>}/>
          <Route path={'/employment'} element={<Employment/>}/>
          <Route path={'/achievements'} element={<Achievements/>}/>
          <Route path={'/projects'} element={<Projects/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/credits'} element={<Credits/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [
    {path:"*", Component: Root}
  ]
);

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}