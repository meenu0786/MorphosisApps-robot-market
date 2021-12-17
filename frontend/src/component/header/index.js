import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>
			<img src="img_avatar.png" alt="Avatar" className="avatar" />
			<p className="title">MorphosisApps/robot-market</p>
		</Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
