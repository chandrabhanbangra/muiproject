import React, { useContext } from 'react'
import ItemsContextProvider from '../Context/ItemsContextProvider'
import { Typography } from '@mui/material'
import ItemsContext from '../Context/ItemsContext'


const OderConform = () => {
  const qty = useContext(ItemsContext)
  return (
   < >
    <Typography variant='h5'>
      1234544545454
    </Typography>
    <Typography variant='h5'>
      1234544545454
    </Typography>
    <Typography variant='h1'>
      1234544545454
    </Typography>
    <Typography variant='h1'>
      {`chandrabhan ${qty}`}
    </Typography>
    
   </>
  )
}

export default OderConform;