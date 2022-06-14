import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usePersonApi from '../hook/usePersonApi'

const Card = ({resident}) => {
    
const person = usePersonApi(resident)
  return (
    <div className='card'>
      <article>
        <img src={person?.image} alt="Image Person" />
        <h2>{person?.name}</h2>
        <p><b>Estado: </b>{person?.status}</p>
        <p><b>Place of origin: </b>{person?.origin.name}</p>
        <p><b>episode: </b>{person?.episode.length}</p>

      </article>
    </div>
  )
}

export default Card
