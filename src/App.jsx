import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Coin from './Page/Coin/Coin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin:coinId' element={<Coin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
