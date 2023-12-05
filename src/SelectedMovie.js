import React from 'react'
import { useParams } from "react-router-dom"

const Screen2 = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        MovieName {id}
      </div>
    </>
  )
}

export default Screen2
