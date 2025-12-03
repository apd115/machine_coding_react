import React from 'react'
import { ChildUseImperative } from './childUseImperative'
import { useRef } from 'react';

export const UseImperativeHandle = () => {
    const childRef = useRef(null);
  return (
    <div>
      <h1>This is parent component</h1>
      <button onClick = {()=>childRef.current.focus()} >Click me</button>
      <ChildUseImperative ref={childRef}/>
    </div>
  )
}



