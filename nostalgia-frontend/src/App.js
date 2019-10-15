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
          <Link to="/Fad">
          <li>Fad</li>
          </Link>
        </ul>  
      </Header>
      <main>
        <Route path ="/" exact render = {props => <Home  {...props}/>}/>
        <Route path ="/Fad" exact render = {props => <Fad  {...props}/>}/>
        <Route path ="/Decades" exact render = {props => <Decades  {...props}/>}/>
        <Route path ="/Decades/new" exact render = {props => <DecadesNew  {...props}/>}/>
        <Route path ="/Decades/1980/" exact render = {props => <DecadesUpdate  {...props}/>}/>
        <Route path ="/Decades/1980/edit/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/1980/delete/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/1990/" exact render = {props => <DecadesUpdate  {...props}/>}/>
        <Route path ="/Decades/1990/edit/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/1990/delete/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/2000/" exact render = {props => <DecadesUpdate  {...props}/>}/>
        <Route path ="/Decades/2000/edit/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/2000/delete/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/2010/" exact render = {props => <DecadesUpdate  {...props}/>}/>
        <Route path ="/Decades/2010/edit/" exact render = {props => <DecadesDelete  {...props}/>}/>
        <Route path ="/Decades/2010/delete/" exact render = {props => <DecadesDelete  {...props}/>}/>
        </main>
      <Footer/>
    </div>
     )
   }
  
}

export default App;