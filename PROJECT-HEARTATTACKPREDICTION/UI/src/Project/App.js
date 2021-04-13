import React, {Component} from 'react'
import Register from './Register/register'
//import {Button,Modal} from 'react-bootstrap'
//import Welcome from './Welcome/welcome'
import {BrowserRouter} from 'react-router-dom'
//import Request from './Request/request' 
import {Route} from 'react-router-dom'
//import Pending from './Request/pending'
import Login from './Register/login'
import Start from './Start/start'
import AttackInfo from './AttackPrediction/attackInfo'
//import Completed from './Request/completed'
import Display from './AttackPrediction/display'
 class App extends Component{
     state={
         show:false,
     }
    handleModal=()=>{
        this.setState({show:!this.state.show})
    }
    render()
    {
        return(
            <BrowserRouter>
           <div>
               <Route path="/" exact component={Start}/>
               <Route path="/register" exact component={Register}/>
               <Route path="/login"  component={Login}/>
               <Route path="/welcome" component={AttackInfo}/>
               <Route path="/display" component={Display}/>
            </div>
            </BrowserRouter>
        )
    }
}
 export default App
