import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Pic from './index.jpg'
class First extends Component
{
   render()
   {
       return(
       <div>
         <h1>WELCOME TO ONLINE HEART ATTACK RISK PREDICTION SYSTEM</h1>
         <img src={Pic}/>
         <Link to="/register" ><button class="btn btn-primary" id="btn">Register</button></Link>
         <Link to="/register" ><button class="btn btn-primary" id="btn">Login</button></Link>
       </div>)
   }
}
export default First