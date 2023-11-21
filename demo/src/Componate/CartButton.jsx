import { Fragment } from "react"
import { Button } from "@mui/material"

const CartButton= ((props)=>{
    return(
        <>
        <Button color={props.BtnColor} sx={props.btnst} variant={props.variantname} size={props.BtnSize} to={props.ItemLink}>{props.BtnName}</Button>
        </>
        )
})
export default CartButton;