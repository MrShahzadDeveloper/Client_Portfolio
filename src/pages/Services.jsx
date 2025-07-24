import React from 'react'
import Button from '../components/Button'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <div className='h-[60vh]'>
      <div>
        <div>
          <p>WHAT WE DO</p>
          <h1>OUR SERVICES</h1>
        </div>
        <div>
          <Button
            label="See More Services"
            // onClick={handleClick} 
            classStyle="px-8 py-3 text-white bg-secondary hover:bg-secondary/90 transition rounded-lg"
          />
        </div>
      </div>
      <div>
        <h1>Outsource your link building, SEO & content marketing projects to our hands-on experience team. We do all painstaking tasks while you spend more time focusing on other business aspects.</h1>
      </div>
      <div>
        <ServicesCard />
      </div>
    </div>
  )
}

export default Services
