import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usePersonApi from '../hook/usePersonApi'

const Card = ({resident}) => {
    
const person = usePersonApi(resident)
  return (
    <div className='card'>
      <img src={person?.image} alt="Image Person" />
      <article className='cardName'>
        <h2>{person?.name}</h2>
        <p><span>Estado: </span>{person?.status}</p>
        <p><span>Place of origin: </span>{person?.origin.name}</p>
        <p><span>episode: </span>{person?.episode.length}</p>

      </article>
    </div>
  )
}

export default Card
