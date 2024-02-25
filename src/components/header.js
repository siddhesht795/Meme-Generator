import React from "react"
import "./header.css"
import trollFace from "../images/trollFace.png"

export default function Header() {
    return(
        <header className='header'>
          <img src={trollFace} />
          <h2>MeMe Generator</h2>
        </header>
      )
}