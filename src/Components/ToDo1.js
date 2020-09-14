import React, {Component} from 'react';
import Task from './Task';
//import Task from './C'

class ToDo1 extends React.Component{


state = {
    value: '',

    arrAnimal: [ ]
}
ValueFunc = (event)=>{ 

    this.setState({value: event.target.value})
   
 }
 addValue=()=> {
        let {value} =this.state
        let newArr =  this.state.arrAnimal
      newArr.push({name: value})

     this.setState({ arrAnimal: newArr})
     
        

       
 }  
 
 render(){
     let {arrAnimal} = this.state;
        return (

            <>
            <input type = 'text' onChange = {this.ValueFunc}/>
            <button onClick= {this.addValue} > Add</button>
            <Task arr = {arrAnimal}/>
            {arrAnimal}

             </>
        )
    }
}
    export default ToDo1;