import React from 'react'
import { useState } from 'react'
// import {accordianData} from '../constants/accordian.constant.jsx'

export const Accordian = () => {
  
    const [isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      {/* {
        accordianData.map((item, index)=>(
         <li key={item.name} onClick={()=>setIsOpen(!isOpen)}>{item.name}</li>
        ))
      } */}
      <h2>I'm accordian</h2>
    </div>
  )
}

