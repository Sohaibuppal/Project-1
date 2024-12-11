import React from 'react'

const Nav = () => {
  return (
    <div>
       <nav className="container">
    <div className="logo">
      <img src="Images/brand_logo.png" alt="Logo error"></img>
    </div>
    <ul>
      <li href="#">Home</li>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About Us</li>

    </ul>
    <button>Login</button>
  </nav>
    </div>
  )
}

export default Nav
