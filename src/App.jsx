import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import About from './pages/About/About'


function App() {


  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/about-page' exact element={<About />} />

        </Routes>
      </div>
    </>
  )
}

export default App
