import React from "react";
import PostCards from "./PostCards";
import classes from "./css/Posts.module.css";
import axios from "axios";

class Posts extends React.Component{

    state ={
        post : []
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            let limitPost = response.data.slice(0,3);
            this.setState({post : limitPost});
           
        });
    }

    render(){
        let posts = this.state.post.map((p)=>{
            return <PostCards title={p.title} body={p.body} key={p.id}/>
        });

        return (
            <React.Fragment>
                <section>
                <div className={classes.mainGrid}>
                    {posts}
                </div>    
                </section>  
            </React.Fragment>

        );
    }
}

export default Posts;