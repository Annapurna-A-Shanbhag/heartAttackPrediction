import React,{Component} from 'react'
import  './attackInfo.css'
import {connect} from 'react-redux'
import Transition from 'react-transition-group/Transition'
import Backdrop from './backdrop'
import Modal from './modal'
import  Popup from './popup'
//import * as firebase from 'firebase'
import firebase from 'firebase'
import '../Firebase/config'
class Attackinfo extends Component{
 state={
      modalTitle:'',
      modalBody:'',
       show:false,
       disable:true,
       showPopup:false,
       popupText:'',
       isLoading:false,
       result:'',
     }
//keys=['Fname','Lname','Gender','Date','Address','Photo',"proof",'Mobile','Email','Password'];
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
togglePopup=(handle,text)=>{
    this.setState({
        ...this.state,
        showPopup:handle,
        popupText:text
    })
}
submit=()=>{
  //alert(this.props.attributes2['Email'].value)
        let obj={}
        for(let i=0;i<13;i++)
        {
            obj[this.props.attributes[i].labal]=this.props.attributes[i].value;
            if(i<=9 && this.props.attributes2[i].labal==='Email')
            {
              obj['Email']=this.props.attributes2[i].value;
            }
        }
        firebase.database().ref('/attackInfoDatabase').push( obj );
}
predict=(event)=>{
  this.props.resultDisplay(this.state.result)
  this.submit();
this.setState({
  ...this.setState,
  isLoading:true
})
let values={};
this.props.attributes.map((item,index)=>{
   values[item.labal]=item.value;
})
fetch('http://127.0.0.1.5000/prediction/',
{
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  method:'POST',
  body:JSON.stringify(values),
})
.then (response=>response.json())
.then(response=>{
  alert(response)
  this.setState({
    ...this.state,
    result:response.result,
    isLoading:false
  });
}
)
/*this.setState({
  ...this.state,
  result:response.result,
  isLoading:false
});*/
//alert(this.state.result)
}
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
        this.modalBody=this.props.attributes2[0].value+" "+this.props.attributes2[1].value+" you have successfylly filled values";
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
     <Modal show={this.state.show} toggle={this.toggle} disable={this.state.disable} 
     display={()=>this.props.resultDisplay(this.state.result)}
     predict={this.predict}
     modalBody={this.state.modalBody} modalTitle={this.state.modalTitle} submit={this.submit}/>
      }
        </Transition>

        <Backdrop show={this.state.show}/> 
        <Popup show={this.state.showPopup} text={this.state.popupText}></Popup>

        {this.props.attributes.map((item,index)=>
        <table>
        <td><h3 id="labal" onMouseEnter={()=>{this.togglePopup(true,item.placeholder)}} onMouseLeave={()=>{this.togglePopup(false)}}>
            <span class="label label-primary" >{item.labal}</span></h3></td>
        <div class="form-group">
        {(item.labal!='sex' && item.labal!='cp' && item.labal!='fbs' && item.labal!='restecg' && item.labal!='exang' &&
            item.labal!='ca' && item.labal!='slope' && item.labal!='thal' )?(<td><input type="text"  id="inputDiv" class="form-control" 
            type={item.type} placeholder={item.placeholder} 
            value={item.value} onInput={(event)=>{this.props.inputHandler(event,index)}} /></td>):
           (<select class="form-control" value={item.value} onInput={(event)=>{this.props.inputHandler(event,index)}} id="inputDiv">
                {item.option.map((item1)=>
                <option>{item1}</option>)}
                </select>)}
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
      attributes:state.Reducer2.attributes,
      attributes2:state.Reducer.attributes,
      show:state.Reducer2.show,
      result:state.Reducer2.result,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        inputHandler:(event,index)=>dispatch({type:'attackHandler',evt:event,index:index}),
        resultDisplay:(result)=>dispatch({type:'result',res:result})
    }
    }
    

export default connect(mapStateToProps,mapDispatchToProps)(Attackinfo)