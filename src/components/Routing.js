import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Page2 from './Page2'
import Page3 from './Page3'
import Page1 from './Page1'
import NotFound from './NotFound'



export default function Routing() {
    
    return (
        <div>
        <Switch>  
            
         <Route exact path="/" component={Page1}/>
          <Route exact path="/Page2" component={Page2}/>
          <Route exact path="/Page3" component={Page3}/>
          <Route component={NotFound}/>
          
       </Switch>
        </div>
    )
}
