import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { Outlet } from "react-router";

function App() {

  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default App
