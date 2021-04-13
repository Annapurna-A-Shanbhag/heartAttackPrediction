import React from 'react'
import './popup.css'
 let popup=(props)=>{
    let classes=props.show?'popupOpen':'popupClosed';
        return(
        <div className={classes} id="popup">
                <h3>{props.text}</h3>
        </div>);
}
export default popup