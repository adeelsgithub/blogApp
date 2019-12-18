import React from "react";
import classes from "./css/fullPost.module.css";
import axios from "axios";
class FullPost extends React.Component{
    state = {
        singlePost : null
    }
    componentDidUpdate(){
        if(this.props.postId){
            if( !this.state.singlePost || (this.state.singlePost && this.state.singlePost.data.id !== this.props.postId)){
                axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.postId)
                .then((response) => {
                this.setState({singlePost : response});
                })
            }
        }
       
    }

    deletePostHandler = () =>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+this.props.postId)
        .then((response) =>{
            console.log(response)
        })
    }


    render(){
       
         
        let post =  <h2>Please select a post</h2>;
        if(this.props.postId){
            post = <h2>LODING YOUR POST...</h2>
            if(this.state.singlePost){
                post = (<React.Fragment>
                      <h2>{this.state.singlePost.data.title}</h2>
                      <p> {this.state.singlePost.data.body} </p>
                      <button className={classes.btndelete} onClick={this.deletePostHandler}>delete</button>
                      </React.Fragment>
                  )
              }
        }
        
        return (
            <section>
                <div className={classes.fullpost}>
                    {post}                    
                </div>
                
            </section>
        )
    }
}

export default FullPost;