import React,  {Component} from 'react';
import Name from './ComponentProd/Name';
import Price from './ComponentProd/Price';
import Description from './ComponentProd/Discription'


class Product extends React.Component {
  
         constructor(props){
           super (props);
           this.props= props;

         }

  render (){

    return (
      <div>  
        <Name name ={this.props.name}/>
        <Price  price = {this.props.price} />
        <Description description ={this.props.description}/>
     </div>
    )
  }
};

export default Product;