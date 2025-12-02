import React from 'react'
import { useRef } from 'react'

export const UseRef = () => {

    const inputRef = useRef();
    console.log(inputRef);
  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick = {()=>{
            inputRef.current.focus();
            inputRef.current.value = 5;
            }}>set focus</button>
    </div>
  )
}

