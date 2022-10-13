import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Forgot from './pages/Login/Forgot'
import './styles/App.css'
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<Forgot />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
