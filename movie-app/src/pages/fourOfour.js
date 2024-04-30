import React from 'react'
import { Link } from 'react-router-dom'

const fourOfour = () => {
  return (
    <div>
        <div>yeah no, 404 </div>
        <Link to={`/`}>home</Link>
    </div>
)
}

export default fourOfour