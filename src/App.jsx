import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { Outlet } from "react-router";

function App() {

  const [cartQuantity,setCartQuantity] = useState(0);

  return (
    <>
      <Header cartQuantity={cartQuantity} ></Header>
      <Outlet context={setCartQuantity}/>
      <Footer></Footer>
    </>
  )
}

export default App
