import React from 'react'
import{Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>this is home</h1>
        <Link to="about"> click on about page</Link>
    </div>
  )
}

export default Home