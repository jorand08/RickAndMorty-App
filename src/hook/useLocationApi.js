import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = searchLocation => {
    
    const [location, setLocation] = useState()

    useEffect(()=>{
        let locationNumber
        if(searchLocation){
            locationNumber = searchLocation
        }else{
            locationNumber =  Math.ceil(Math.random()*126)
        }
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

        axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
        
    },[searchLocation])
  return location
}

export default useLocationApi