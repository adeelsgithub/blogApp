import React from "react";
import classes from "./css/fullPost.module.css";
class FullPost extends React.Component{
    render(){
        return (
            <section>
                <div className={classes.fullpost}>
                    <h2>Title</h2>
                    <p> Content </p>
                    <button className={classes.btndelete}>delete</button>
                </div>
                
            </section>
        )
    }
}

export default FullPost;