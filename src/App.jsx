import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { About, Projects } from './pages'

function App() {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router basename='/jordan-portfolio'>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
