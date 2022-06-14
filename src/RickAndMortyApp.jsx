import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import LocationInfo from './components/LocationInfo'
import App from './App.css'
import useLocationApi from './hook/useLocationApi'
import InputSearch from './components/InputSearch'

const RickAndMortyApp = () => {
   const [searchLocation, setSearchLocation] = useState()
   const location = useLocationApi(searchLocation)

  return (
    <div className='App' >
        <InputSearch setSearchLocation={setSearchLocation}/>
        <LocationInfo location={location}/>
        <div className='rickAndMorty'>
            {location?.residents.map(resident => (
                <Card 
                    resident={resident}
                    key={resident}
                />
            ))}
        </div>
        
        
    </div>      
  )
}

export default RickAndMortyApp