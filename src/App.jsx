import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './assets/js/fontAwesome'
import Home from './component/pages/Home'
import MainLayout from './layouts/MainLayout'
import About from './component/pages/About'
import Work from './component/pages/Work'
import Contact from './component/pages/ContactMe'

function App() {
  return (
    <Router basename="/updated-portfolio">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
