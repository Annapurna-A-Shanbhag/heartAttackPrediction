import React,{Component} from 'react'
import {connect} from 'react-redux'
class Display extends Component
{
 render(){
     return(
     <h1>{this.props.result}</h1>
     )
     }
}
let mapStateToProps=(state)=>{
    return{
      attributes:state.Reducer2.attributes,
      show:state.Reducer2.show,
      result:state.Reducer2.result
    }
}
export default connect(mapStateToProps)(Display)