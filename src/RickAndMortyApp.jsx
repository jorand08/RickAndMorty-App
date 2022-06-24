import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import LocationInfo from './components/LocationInfo'
import App from './App.css'
import useLocationApi from './hook/useLocationApi'
import InputSearch from './components/InputSearch'
import Pagination from './components/Pagination'

const RickAndMortyApp = () => {
   const [searchLocation, setSearchLocation] = useState()
   const [currentPage, setCurrentPage] = useState(1)
   const location = useLocationApi(searchLocation)
   
   let arrayResidents =[]
   const residentPerPage = 10
   if(location?.residents.length < residentPerPage){
    arrayResidents = [...location?.residents]
   }else{
    const lastResident = currentPage * residentPerPage
    arrayResidents=location?.residents.slice(lastResident - residentPerPage, lastResident)
   }

   let arraypages = []
   let quantityPages = Math.ceil(location?.residents.length / residentPerPage)
   const pagesPerBlock = 5
   let currentBlock = Math.ceil(currentPage/pagesPerBlock) 
   if(currentBlock * pagesPerBlock >= quantityPages){
    for (let i = currentBlock * pagesPerBlock- pagesPerBlock + 1 ; i<=quantityPages ; i++){
        arraypages.push(i)
    }

   } else{
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock +1 ;
        i<= currentBlock * pagesPerBlock ; i++){
            arraypages.push(i)
        }
            
        }


  return (
    <div className='App' >
        <InputSearch setSearchLocation={setSearchLocation}/>
        <LocationInfo location={location}/>

        <Pagination
            arraypages={arraypages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            quantityPages={quantityPages}
            currentBlock ={currentBlock }
        />


        <div className='rickAndMorty'>
            {arrayResidents?.map(resident => (
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