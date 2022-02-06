import React, {Component} from 'react';

import './Box.css';
class Box extends Component{
constructor(props){
    super(props);
    this.state={
        isClicked:this.props.n.isClicked
      
    };
    this.handleClick=this.handleClick.bind(this);
}

 



handleClick(e){
    const {id}=this.props.n;
    this.setState({isClicked:!this.props.n.isClicked});
    setTimeout(()=>
    this.props.addItem(id,this.state.isClicked),1000);

   
}
 render(){
     return (
<div className='Box' style={{backgroundColor: this.props.n.color }}  onClick={this.handleClick}>
<h1 className="Box-name">{this.props.n.color}</h1>
</div>

     )
 }



}

export default Box;