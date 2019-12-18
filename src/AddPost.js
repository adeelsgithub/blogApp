import React from "react";
import classes from "./css/AddPost.module.css";
import axios from "axios";

class AddPost extends React.Component{

    state={
        title : "",
        content: "",
        author : ""
    }

    addPostHandler = () =>{
        let data = {
            title : this.state.title,
            content : this.state.content,
            author : this.state.author
        };

        axios.post("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
            console.log(response);
        })

    }


    render(){
        return (
            <section>
                <div className={classes.addpost}> 
                    <h2>ADD A POST</h2>
                    <h3>Title</h3>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({ title : event.target.value})}/>
                    <h3>Add Content</h3>
                    <textarea type="text" onChange={(event) => this.setState({ content : event.target.value})}></textarea>
                    <h3>Add Author</h3>
                    <input type="text" onChange={(event) => this.setState({ author : event.target.value})}/>
                    <button className={classes.btnadd} onClick={this.addPostHandler}>Add</button>
                </div>
            </section>

        )
    }
}

export default AddPost;