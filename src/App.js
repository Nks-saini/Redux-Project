import React from 'react';
import './App.css'
import Page1 from './Page1'
import Page2 from './Page2'
//  import Routes from './Routes'

// import { connect } from 'react-redux';

class App extends React.Component{

  render(){
  return(
  <div>
    <Page1 />
    <br />
    <Page2 />
  </div>
  )
   
  }
 
}

export default App;


