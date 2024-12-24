import React from 'react'
import "./EmpyToDoSearchResult.css"

function EmpyToDoSearchResult({searchText}) {
  return (
    <p>No hay resultados para "{searchText}"</p>
  )
}

export default EmpyToDoSearchResult