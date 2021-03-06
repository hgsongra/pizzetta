import React from "react";
import classes from "./Layout.css";
const layout = props => (
  <>
    <div>Toolbar, Sidebar</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
