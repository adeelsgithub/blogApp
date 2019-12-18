import React from "react";
import classes from "./css/postCards.module.css";

class PostCards extends React.Component{
    render(){
        return (
                <div className={classes.cards} onClick={this.props.selectedPostHandler}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </div>
        );
    }
}

export default PostCards;