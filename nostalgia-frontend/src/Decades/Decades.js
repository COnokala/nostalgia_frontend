import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import './decades.css'

class DecadesCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start_year: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitImage = this.submitImage.bind(this)
    }
}