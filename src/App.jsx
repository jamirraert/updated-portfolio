import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import './assets/js/fontAwesome'
import Home from './component/pages/Home'
import MainLayout from './layouts/MainLayout'
import About from './component/pages/About'
import Work from './component/pages/Work'
import Contact from './component/pages/ContactMe'
import NotFound from './component/pages/NotFound'


function App() {
  <BrowserRouter basename={import.meta.env.BASE ? `/` : `/updated-portfolio`} >
    <MainLayout >
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  </BrowserRouter > 
}

export default App
