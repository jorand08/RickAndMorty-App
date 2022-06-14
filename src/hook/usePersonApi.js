import axios from "axios"
import { useEffect, useState } from "react"

const usePersonApi = resident => {
    const [person, setPerson] = useState()
    
    useEffect(() => {
        axios.get(resident)
        .then(res => setPerson(res.data))
        .catch(err => console.log(err))
    },[])

  return person
}

export default usePersonApi