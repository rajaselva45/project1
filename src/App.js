 import React, { useState } from 'react'

import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './component/nav/nav'
import Cart from './component/cart/cart'
import Food from './component/data/data'
import reduxstore from './component/redux/reduxstore'

import Review from './component/navebars/review'
import Dropdown from './single/single'
import Register from './component/register/register'
import Index from './component/login/login'
import Profile from './component/profile/profile'
import SlideImage from './component/footer/footer'

 

    


 


function App() {
  
  
  return (
    <>
 
    
      <Provider store={reduxstore}> 

      <BrowserRouter>
      <Switch> 
       
       
           <Route path='/'><Navbar/> </Route>  
           <Route path='/food'><Food/> </Route>     
           <Route path='/cart'><Cart/> </Route>
           <Route path ='/review'><Review/> </Route>
           <Route path='/top'><Navbar/></Route>
             <Route path='/single'><Dropdown/></Route> 
             <Route path='/regis'><Register/> </Route> 
             <Route path='/foot'><SlideImage/></Route>
             <Route path='/loginn'><Index/></Route>
             <Route path='/toolbar'><Profile/> </Route>
         
              
     
        
        
        
      </Switch> 
      </BrowserRouter> 
     </Provider>  
      
    </>
  )
}

export default App
