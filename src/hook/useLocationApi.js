import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = () => {
    const [location, setLocation] = useState()
    
    useEffect(()=>{
        const randomlocation = Math.ceil(Math.random()*126)
        const URL = `https://rickandmortyapi.com/api/location/${randomlocation}`
        axios.get(URL)
        .then(res => {
            setLocation(res.data)
        })
        .catch(err => console.log(err))
        
    },[])
  return {location}
}

export default useLocationApi