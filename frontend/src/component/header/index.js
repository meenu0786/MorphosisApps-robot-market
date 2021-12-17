import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import swal from "sweetalert";

export default function Header({ setIsOpen, isOpen, cartList }) {

  const handleClick = () =>{
    setIsOpen(!isOpen)
    if(cartList.length<1){
      swal("Add Some Product In Cart List !!")
      setIsOpen(false)
    }
  }

  return <header>
    <AppBar>
      <Toolbar className="justify-content-between">
      <p className="title">MorphosisApps/robot-market</p>
      <span onClick={handleClick} style={{ height: "50px", marginTop: "0", color: "white", width: "40px",fontSize:"30px" ,cursor:"pointer" }} className="glyphicon glyphicon-shopping-cart"> </span>
      </Toolbar>
    </AppBar>
  </header>

}
