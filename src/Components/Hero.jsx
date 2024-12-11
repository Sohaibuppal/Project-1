import React from 'react'

const Hero = () => {
  return (
    <main className="container hero">
      <div className='hero-content'>
        <h1>YOUR FEET DESEREV THE BEST</h1>
        <p>YOUR FEET DESEREV THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESEREV THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p>
        <div className='hero-btn'>
        <button>Shop Now</button>
        <button className=''> Category</button>
      </div>
      <div className='shopping'>
        <p>Also Available On</p>
        <div className='brand-icons'>
        <img src="Images/flipkart.png" alt="card-1" />
        <img src="Images/amazon.png" alt="card-2" />
      </div>
      </div>
      
      </div>
     
      <div className='hero-image'>
      <img src="Images/shoe_image.png" alt="card-3" />
      </div>
    </main>
    
  )
}

export default Hero
