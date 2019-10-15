import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
   }
   render(){
     return(
    <div className="App">
       <Header >
        <ul>
          <Link to ="/">
          <li>Home</li>
          </Link>
          <Link to="/Decades">
          <li>Decades</li>
          </Link>
          <Link to="/Fads">
          <li>Fads</li>
          </Link>
        </ul>  
      </Header>
      <main>
        <Route path ="/" exact render = {props => <Home  {...props}/>}/>
        <Route path ="/Decades" exact render = {props => <Decades  {...props}/>}/>
        <Route path ="/Decades/:id" exact render = {props => <DecadesYear  {...props}/>}/>
        <Route path ="/Fads" exact render = {props => <Fads  {...props}/>}/>
        <Route path ="/Fads/:id" exact render = {props => <Amateur  {...props}/>}/>
      </main>
      <Footer/>
    </div>
     )
   }
  
}

export default App;