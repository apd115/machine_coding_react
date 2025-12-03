import React, { use, useCallback, useMemo } from 'react'
import { useState } from 'react'

export const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  // const expensiveCalculation = useMemo((count) => {
  //    console.log( "expensive calculation", count2);
  //    return count1 * count1;
  // }, [count1]);  //here what's happening - everytime this count1 changes only then this function gets invoked and it gets reinitialised all
  //all over again so count2 reflects with its changed value.

  const expensiveCalculation = useCallback((count) => {
     console.log( "expensive calculation", count2);
     return count1 * count1;
  }, [count1]);  //here everytime any of the state variables count1 and count2 changes it re-renders the full component and this function gets
  //invoked with the unchanged value of count2 beacuse we are using useCallback which memoizes the function itself so even if we change 
  //the value of count2 it is not going to be reflected untill count1 is changed because count1 is responsible for reinitialises the 
  //the function otherwise the function is memoized.
  return (
    <div>
      <h1>Increment counter: {expensiveCalculation()}</h1>
      <button onClick = {()=>setCount1(count1 + 1)}>Increase</button>
      <h2> Decrement counter {count2}</h2>
      <button onClick = {()=>setCount2(count2-1)}>Decrement</button>
    </div>
  )
}

