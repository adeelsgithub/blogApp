import React from "react";
import PostCards from "./PostCards";
import classes from "./css/Posts.module.css";


class Posts extends React.Component{

    

    render(){
        let posts = this.props.post.map((p)=>{
            return <PostCards title={p.title} body={p.body} key={p.id} selectedPostHandler={() => this.props.selectedPostHandler(p.id)}/>
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