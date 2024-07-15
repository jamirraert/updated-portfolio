import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import './assets/js/fontAwesome'
import Home from './component/pages/Home'
import MainLayout from './layouts/MainLayout'
import About from './component/pages/About'
import Work from './component/pages/Work'
import Contact from './component/pages/ContactMe'
import NotFound from './component/pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='work' element={<Work />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ), 
  {
    basename: '/updated-portfolio', // Add the base path here
  }
);

function App() {
  return <RouterProvider router={router} />
}

export default App
