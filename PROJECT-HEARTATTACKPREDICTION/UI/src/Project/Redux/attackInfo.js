import React,{Component} from 'react'
import  './attackInfo.css'
import {connect} from 'react-redux'
import Transition from 'react-transition-group/Transition'
import Backdrop from './backdrop'
import Modal from './modal'
class Attackinfo extends Component{
 state={
      modalTitle:'',
      modalBody:'',
       show:false,
       disable:true
     }
keys=['Fname','Lname','Gender','Date','Address','Photo',"proof",'Mobile','Email','Password'];
password1
password2
disable
modalTitle
modalBody
classes=["modal"];
toggle=()=>{
       this.setState({
         ...this.state,
         disable:true,
         show:false
       })
      
     }
/*submit=()=>{
        let obj={}
        for(let i=0;i<this.keys.length;i++)
        {
            obj[this.keys[i]]=this.props.attributes[i].value;
        }
        firebase.database().ref('/userDatabase').push(
          obj
    )
}*/
checking=()=>{
    let test=1;
    for(let attr of this.props.attributes)
    {
      if(attr.value==='')
      {
        this.modalTitle="Warning:(";
        this.modalBody="You "+" didn't fill "+attr.labal;
        this.disable=true;
        test=0;
        break;
      }
    }
    if(test==1)
    {
        this.modalTitle="Successful :)";
        this.modalBody=this.props.attributes[0].value+" "+this.props.attributes[1].value+" you have successfylly registered";
        this.disable=false;
    }
    this.setState({
      ...this.state,
      modalTitle:this.modalTitle,
      modalBody:this.modalBody,
      disable:this.disable,
      show:true,
    })
 

}
  render()
  {
      return(
       <div className="attackDiv" >

  
      <Transition
         mountOnEnter
         mountOnExit 
         in={this.state.show} timeout={300}>
      {state=>
     <Modal show={this.state.show} toggle={this.toggle} disable={this.state.disable} submit={this.submit}
     modalBody={this.state.modalBody} modalTitle={this.state.modalTitle}/>
      }
        </Transition>

        <Backdrop show={this.state.show}/> 
        

        {this.props.attributes.map((item,index)=>
        <table>
        <td><h3 id="labal"><span class="label label-primary" >{item.labal}</span></h3></td>
         <div class="form-group">
            {<td><input type="text"  id="inputDiv" class="form-control" 
            type={item.type} placeholder={item.placeholder} 
            value={item.value} onInput={(event)=>{this.props.inputHandler(event,index)}} /></td>}
          </div>
         </table>
         )
        }

         <button class="btn btn-success" style={{marginLeft:'250px'}} 
         onClick={this.checking}>SUBMIT</button>
           
           


     </div>
      )
    }
}
let mapStateToProps=(state)=>{
    return{
      attributes:state.attributes,
      show:state.show 
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        inputHandler:(event,index)=>dispatch({type:'attackHandler',evt:event,index:index})
    }
    }
    

export default connect(mapStateToProps,mapDispatchToProps)(Attackinfo)