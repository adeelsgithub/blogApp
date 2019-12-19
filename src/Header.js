import React from "react";
import classes from "./css/Header.module.css";

class Header extends React.Component{

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>BLOG</h1>
                    <nav>
                        <ul>
                            <li> <a href="#">Home</a> </li>
                            <li> <a href="#">Contact</a> </li>
                            <li> <a href="#">About</a> </li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        );
    }



}

export default Header;