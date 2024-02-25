import React from "react"
import './App.css';
import Header from "./components/header.js"
import Meme from "./components/meme.js"

function App() {
  return(
    <div className="container">
      <Header/>
      <Meme/>
    </div>
  )
}

export default App;
