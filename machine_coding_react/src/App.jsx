import { useState } from 'react'
import { Accordian } from './components/accordian.jsx'
import { UseRef } from './components/useRef.jsx'
import { UseReducer } from './components/useReducer.jsx'
import { UseMemo } from './components/useMemo.jsx'
import { UseImperativeHandle } from './components/useImperativeHandle.jsx'

function App() {
  

  return (
    <>
    <div>
       <h1 className="font-bold"> This is the property of Aparna Dwivedi </h1>
     <Accordian/>
     
    </div>
    <div>
      <UseRef/>
      <UseReducer/>
    </div>
    <div>
      <UseMemo/>
    </div>
    <div>
      <UseImperativeHandle/>
      
    </div>
    
    </>
  )
}

export default App
