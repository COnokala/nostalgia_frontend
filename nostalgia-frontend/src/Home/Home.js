import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './Home.css'

class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        description:"Welcome to !"
      }
    }
}

      export default Home;