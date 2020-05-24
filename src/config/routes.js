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
import About from '../components/About'
import Contact from '../components/Contact'

 function Routes(props){
   return(
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/contact">
         <Contact />
       </Route>
       <Route exact path="/profile">
         <ProfileContainer
           currentUser={props.currentUser}
           setCurrentUser={props.setCurrentUser}
           logout={props.logout}
           />
       </Route>
       <Route path="/About">
         <About />
       </Route>
       <Route path="/profile/address">
         <AddressContainer
           currentUser={props.currentUser}
           logout={props.logout}
           />
       </Route>
       <Route path="/profile/creditcard">
         <CreditsContainer
           currentUser={props.currentUser}
           logout={props.logout}
           />
       </Route>

       <Route path="/machine">
         <MachineContainer
           />
       </Route>
       
       <div className="container">
       <Route path="/teas/:id?" render={routeProps =>
        <TeaContainer 
          {...routeProps}

          addToCart={props.addToCart}
          cartBounce={props.cartBounce}
          total={props.total}
          totalItems={props.totalItems}
          cartItems={props.cartItems}
          removeProduct={props.removeProduct}
          updateQuantity={props.updateQuantity}
          productQuantity={props.productQuantity}
          />
        }
        />
        </div>

       

     </Switch>
   );
}

export default Routes;
