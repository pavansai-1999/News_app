import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'

const App = () => {
  const[category,SetCategory]=useState("general")

  return (
   <>
    <Navbar SetCategory={SetCategory}/>
    <NewsBoard category={category}/>
    
   </>

  )
}

export default App