import React,  {Component} from 'react';



class Name extends React.Component {
    constructor(props){
        super (props);
        this.props= props;
    }

  render (){

    return (
      <div>    {this.props.name}     </div>
    )
  }
};


export default Name ;