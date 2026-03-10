import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { Outlet } from "react-router";

function App() {

  const [cartItems,setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} ></Header>
      <Outlet context={[cartItems,setCartItems]}/>
      <Footer></Footer>
    </>
  )
}

export default App

//To do
//create a 2 dimensional array , the inner ones hold an item id and its quantity, the outher one holds all cartitemArrays

