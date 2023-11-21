import React from "react";
import ItemsContext from "./ItemsContext";

const ItemsContextPorvider=((children)=>{
  const [addToCartValue,setAddToCartValue] =React.useState()
  console.log(addToCartValue)
    return(
        <ItemsContext.Provider value={{addToCartValue, setAddToCartValue}}>
          
          {children}
        </ItemsContext.Provider>
    )
})
export default ItemsContextPorvider;