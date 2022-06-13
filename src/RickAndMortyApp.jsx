import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Loader from './components/Loader'
import LocationInfo from './components/LocationInfo'
import App from './App.css'
import useLocationApi from './hook/useLocationApi'

const RickAndMortyApp = () => {
    
const {location} = useLocationApi()

  return (
    <div className='App' >
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