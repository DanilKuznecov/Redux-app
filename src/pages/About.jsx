import React from 'react'
import { useSelector } from 'react-redux'



const About = () => {

  const { post } = useSelector(state => state);
  
  const obj = post.map(item => item.body)

    
  return (
    <div>
      <p>{obj}</p>
    </div>
    
  )
}

export default About