import { React, useState, useEffect } from 'react';
import './PageGuide.scss';


function PageGuide(props) {
 

console.log(props.selected)
   

    return (
        <div className="PageGuide">
            {props.selected.map((item) => {
                if(item.selected) {
                    return (
                        <div className="selected"></div>
                    )}
                else {
                    return (
                        <div></div>
                    )
                }
                
            })}
           
            
        </div>
    )
}

export default PageGuide
