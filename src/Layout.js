import React from "react";
import classes from "./css/Layout.module.css";

class Layout extends React.Component{

    render(){
        return (
            <main className={classes.wrapper}>
             {this.props.children}
            </main>
        );
    }

}

export default Layout;