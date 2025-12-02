import React, { useReducer } from 'react'

export const UseReducer = () => {
    const products =[
        {
            id : 1,
            name: "prod_one",
        },
        {
            id: 2,
            name: "prod_two",
        },
        {
            id: 3,
            name: "prod_three",
        },
        {
            id: 4,
            name: "prod_four",
        }
    ]
    
    //reducer function
    initialState = {
        cart: [],
    }

    const prodReducer = (state, action) =>{
       switch( action.type ){
        case( "ADD"):
            return {
                ...state,
                cart : [ ...state.cart, action.payload]
            };
        case("REMOVE"):
          return{
            ...state,
            cart : [ state.cart.filter((prod)=>{ prod.id !== action.payload.id })]
          };
        case("CLAER"):
        return{
            cart : []
        };
        
       }
    }

    const[state, dispatch] = useReducer(initialState, prodReducer );
  return (
    
    <div>
        <div>
            {
                state.cart.map((item)=>(
                    <div>
                        <li key={item.id}>
                        {item.name}
                        </li>
                    <button onclick={()=>{dispatch({type:"REMOVE", payload:item})}}>
                       REMOVE
                    </button>
                    </div>
                 
                ))
            }
            {products.map((prod)=>(
                <div>
                <li key={prod.id}>{prod.name}</li>
                <button onClick={()=>{dispatch({type: "ADD", payload:prod})}}>ADD</button>
                </div>
                
            ))}
        </div>


    </div>
  )
}

