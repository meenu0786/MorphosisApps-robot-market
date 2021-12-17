import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header({ setIsOpen, isOpen }) {

  return <header>
    <AppBar>
      <Toolbar className="justify-content-between">
      <p className="title">MorphosisApps/robot-market</p>
        <button onClick={() => { setIsOpen(!isOpen) }} style={{ height: "50px", marginTop: "0" }}>open</button>
        
      </Toolbar>
    </AppBar>
  </header>

}
