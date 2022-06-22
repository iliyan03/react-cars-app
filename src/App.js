import { useState, useEffect } from 'react'
import React from 'react'

import Car from './components/Car'

const App = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const getCars = async () => {
      const carsFromServer = await fetchCars()
      setCars(carsFromServer)
    }

    getCars()
  }, [])

  const fetchCars = async () => {
    const res = await fetch('http://127.0.0.1:8000/cars/cars/')
    const data = await res.json()

    return data
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        {cars.map((car, index) => (
          <Car key={ index } car={car}/>
        ))}
      </div>
    </div>
  )
}

export default App