import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './Page1'
import Page2 from './Page2'

class Routes extends Component{
 render(){
   return(
     <Switch> 
       <Route exact path="/page1" component={Page1} />
       <Route exact path="/page2" component={Page2} />
     </Switch>
   );
  }
 }
 export default Routes;