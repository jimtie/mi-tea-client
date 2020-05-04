import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import ProfileContainer from '../containers/ProfileContainer'

 function Routes(props){
   return(
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/profile">
         <ProfileContainer
           currentUser={props.currentUser}
           setCurrentUser={props.setCurrentUser}
           />
       </Route>
     </Switch>
   );
}

export default Routes;