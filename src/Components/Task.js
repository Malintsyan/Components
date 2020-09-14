import React from 'react';

 function Task (props){
     let {arr}= props
 let showNames = arr.map( (item,index)=> <p key = {index} > Animal: {item.name} </p>

       )
       return (

        <p> {showNames} </p>

       )



   
 }

export default Task;