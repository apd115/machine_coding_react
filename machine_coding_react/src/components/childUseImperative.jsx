import React, { forwardRef, useImperativeHandle } from 'react'
import { useRef } from 'react';

export const ChildUseImperative = forwardRef((props, ref) => {

    const inputRef = useRef(null);
    const focus = ()=>{
        return inputRef.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return {
            focus,
        };
    })
  return (
    <div>
        
        <input ref = {inputRef} type="text"/>
        <h1>this is child component</h1>
    </div>
  )
})

