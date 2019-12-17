import React from 'react';
import Layout from "./Layout";
import Header from "./Header";
import Posts from "./Posts";
import FullPost from "./FullPost";
import AddPost from "./AddPost";
import Footer from "./Footer";
import classes from "./css/app.module.css";

class App extends React.Component{
  render(){
    return (
      <Layout>
        <Header/>
        <Posts/>
        <FullPost/> 
        <AddPost/>
        <Footer/>       
      </Layout>
    );
  };
}


export default App;
