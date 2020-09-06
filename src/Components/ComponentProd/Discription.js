import React,  {Component} from 'react';



class Description extends React.Component {
    constructor(props){
        super (props);
        this.props= props;
    }
  render() {

    return(
      <div>   {this.props.description}   </div>
    )
  }
};



export default Description ;