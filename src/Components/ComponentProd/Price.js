import React,  {Component} from 'react';



class Price extends React.Component {
    constructor(props){
        super (props);
        this.props= props;


         }

  render (){

    return (
      <div>  {this.props.price}      </div>
    )
  }
}



export default Price ;