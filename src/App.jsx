import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
