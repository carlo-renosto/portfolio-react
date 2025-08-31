import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
