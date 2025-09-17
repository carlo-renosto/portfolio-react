import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Page404 from './pages/Page404/PageNotFound'

function App() {
  return (
    <BrowserRouter basename="/portfolio-react">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
