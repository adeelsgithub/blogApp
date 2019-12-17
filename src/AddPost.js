import React from "react";
import classes from "./css/AddPost.module.css";

class AddPost extends React.Component{
    render(){
        return (
            <section>
                <div className={classes.addpost}> 
                    <h2>ADD A POST</h2>
                    <h3>Title</h3>
                    <input type="text" />
                    <h3>Add Content</h3>
                    <textarea type="text"></textarea>
                    <h3>Add Author</h3>
                    <input type="text"/>
                    <button className={classes.btnadd}>Add</button>
                </div>
            </section>

        )
    }
}

export default AddPost;