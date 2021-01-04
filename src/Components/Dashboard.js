import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import HomePageContent from './HomePageContent'


const imgMyimageexample = require('../assets/imageexample.jpg');
const divStyle = {
  width: '88%',
  height: '800px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover' ,
  paddingTop: "10px"
};

export default class Dashboard extends Component {
    render() {
        return (
            <Container 
            
            style={{  
                divStyle
              }}

            >
            
                <Header />
                <HomePageContent />

            </Container>
           
        )
    }
}
