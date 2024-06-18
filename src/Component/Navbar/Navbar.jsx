import React from 'react'
import './Navbar.css'
import { useContext } from 'react'
import {CoinContext} from '../../Context/CoinContext'

function Navbar() {
    const {setCurrency}=useContext(CoinContext)
    const currencyHandler=(e)=>{
        switch(e.target.value){
            case "usd":{
                setCurrency({name:"usd",symbol:"$"})
                break;
            }
            case "eur":{
                setCurrency({name:"eur",symbol:"€"})
                break;
            }
            case "inr":{
                setCurrency({name:"inr",symbol:"₹"})
                break;
            }default:{
                setCurrency({name:"usd",symbol:"$"})
                break;
            }
        }
    }
  return (
    <div className="navbar">
    <h1 className='logo'>Crypto</h1>
    <ul>
      <li>Home</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>About</li>
    </ul>
    <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
    </div>
  </div>  
  )
}

export default Navbar