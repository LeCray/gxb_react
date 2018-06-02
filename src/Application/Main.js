import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../Components/Landing';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';



const Main = () => (
  <main>
    <Switch>
    	<Route exact path='/' component={Landing}/>
		<Route path="/SignUp" component={SignUp} />
		<Route path="/Login" component={Login} />      
    </Switch>
  </main>
)

export default Main;