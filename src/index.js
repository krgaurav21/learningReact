import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currTime = new Date().getHours();

let greeting;
const cssStyle ={};

if(currTime < 12 && currTime >=1){
    greeting = " Good MOrning !!"
    cssStyle.color = 'green';
}
else if(currTime >=12 && currTime < 20){
    greeting = "Good Afternoon !!";
    cssStyle.color= 'Orange';
}else{
    greeting = "Good Night !!";
    cssStyle.color = 'black';
}



ReactDOM.render( 
    <>
    <div>
    <h1> Hello Sir ,
     <span style = {cssStyle}> {greeting} </span>
    </h1>
    </div>
    </>,
    
    document.getElementById('root')

);