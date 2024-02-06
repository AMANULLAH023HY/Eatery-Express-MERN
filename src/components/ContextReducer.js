// import {  createContext, useContext, useReducer } from "react"


// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state,action) =>{
//     switch(action.type){
//         case "ADD":
//             return [...state, {id:action.id, name:action.name, img:action.img, size:action.size,qty:action.qty, price:action.price}]

//         default:
//             console.log("Error in reducer")
//     }

// }

// export default function CartProvider({children}){

//     const [state, dispatch] = useReducer(reducer)
//     return(

//         <CartDispatchContext.Provider value={dispatch}
// >
//     <CartStateContext.Provider value={state}>
//         {children}
//     </CartStateContext.Provider>
// </CartDispatchContext.Provider>


//     )
// }

// export const useCart = () =>useContext(CartStateContext);

// export const useDispatchCart = ()=>useContext(CartDispatchContext);







import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          img: action.img,
          size: action.size,
          qty: action.qty,
          price: action.price,
        },
      ];
      case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index,1)

        return newArr;

    default:
      console.log("Error in reducer");
      return state;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []); // Provide an empty array as initial state

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
