import React from 'react'

const InputSearch = ({setSearchLocation}) => {
    
const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
}
  return (
    <form onSubmit={searchLocation}>
        <input type="text" />
        <button>Search</button>

    </form>
  )
}

export default InputSearch