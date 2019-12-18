import React from 'react';
import Layout from "./Layout";
import Header from "./Header";
import Posts from "./Posts";
import FullPost from "./FullPost";
import AddPost from "./AddPost";
import Footer from "./Footer";
import classes from "./css/app.module.css";
import axios from "axios";

class App extends React.Component{

  state ={
    post : [],
    selectedPost : null
}

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        let limitPost = response.data.slice(0,3);
        this.setState({post : limitPost});
    });
}

selectedPostHandler = (id) => {
   this.setState({selectedPost : id});
}

  render(){
   
    return (
      <Layout>
        <Header/>
        <Posts post={this.state.post} selectedPostHandler={this.selectedPostHandler}/>
        <FullPost postId={this.state.selectedPost}/> 
        <AddPost/>
        <Footer/>       
      </Layout>
    );
  };
}


export default App;
