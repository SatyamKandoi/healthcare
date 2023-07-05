
import React, { useState } from "react";
import {Drawer,IconButton} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const DrawerComp = ({links}) => { 
    const [open, setOpen] = useState(false)
  return (
    <>
    <Drawer  PaperProps={{ sx:{backgroundColor:"#57B7CA"}}} open={open} onClose={()=> setOpen(false)} > 
    
  
    </Drawer>
    <IconButton  sx={{marginLeft:"auto",color:"white"}}onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon></MenuRoundedIcon>
    </IconButton>
    </>
  )
}

export default DrawerComp