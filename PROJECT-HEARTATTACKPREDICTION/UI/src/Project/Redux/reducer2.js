let initial={
    attributes:[{
      labal:'age',
      placeholder:'Enter age',
      type:'text',
      value:''
    },
    { 
     labal:'sex',
     type:'select',
     placeholder:'Enter gender',
     value:0,
     option:[0,1]
    },
    {
     labal:'cp',
     placeholder:'Enter Chest pain',
     type:'select',
     value:0,
     option:[0,1,2,3]
    },
    {
     labal:'trestbps',
     placeholder:'Enter Resting Blood Pressure ',
     type:'text',
     value:''
    },
    { 
     labal:'chol',
     placeholder:'Enter Cholestrol',
     type:'text',
     value:''
    },
    {
     labal:'fbs',
     placeholder:'Fasting Blood Pressure',
     type:'select',
     value:0,
     option:[0,1]
    },
    {
     labal:'restecg',
     placeholder:'Resting ECG',
     type:'text',
     value:0,
     option:[0,1]
    },
    {
      labal:'thalach',
      type:'text',
      placeholder:'Maximum Heart rate achieved',
      value:''
    },
    {
     labal:'exang',
     type:'select',
     placeholder:'exercise included agina',
     value:0,
     option:[0,1]
    },
    {
     labal:'oldpeak',
     type:'text',
     placeholder:'ST depression included by exercise relative to rest',
     value:'',
    },
    {
     labal:'slope',
     type:'select',
     placeholder:'the slope of the peak exercise relative to rest',
     value:0,
     option:[0,1,2]
    },
    {
     labal:'ca',
     type:'select',
     placeholder:'number of major vessels colored by flourosopy',
     value:0,
     option:[0,1,2,3]
    },
    {
     labal:'thal',
     type:'select',
     placeholder:'thalassemia',
     value:0,
     option:[0,1,2,3]
    },

   ],
show:false,
result:'kyaaaa'
}
let reducer2=(state=initial,action)=>{
    if(action.type==='attackHandler')
    {
        let target=action.evt.target.value;
        let attribute=state.attributes.slice();
        attribute[action.index].value=target;
        attribute.value=target;
       state={
           ...state,
           attributes:attribute
       }
    }
    if(action.type==="result")
    {
     //alert(action.res)
      state={
        ...state,
        result:action.res,
      }
    }
    return state;
}
export default reducer2