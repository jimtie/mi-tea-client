import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components
import Home from '../components/Home'
import ProfileContainer from '../containers/ProfileContainer'
import AddressContainer from '../containers/AddressContainer'
import TeaContainer from '../containers/TeaContainer'
import TeaItem from '../components/TeaItem'
import MachineContainer from '../containers/MachineContainer'
import CreditsContainer from '../containers/CreditsContainer'

 function Routes(props){
   return(
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/profile">
         <ProfileContainer
           currentUser={props.currentUser}
           setCurrentUser={props.setCurrentUser}
           logout={props.logout}
           />
       </Route>
       <Route path="/profile/address">
         <AddressContainer
           currentUser={props.currentUser}
           />
       </Route>
       <Route path="/profile/creditcard">
         <CreditsContainer
           currentUser={props.currentUser}
           />
       </Route>
       <Route path="/teas/:id?" render={routeProps =>
        <TeaContainer 
        {...routeProps}
          />
        }
        />
       <Route path="/machine">
         <MachineContainer
           />
       </Route>
     </Switch>
   );
}

export default Routes;
