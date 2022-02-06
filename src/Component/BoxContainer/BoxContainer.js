import React, {Component} from 'react';
import Box from '../Box/Box';
import './BoxContainer.css';
import {hexColor} from '../Box/helpers';
class BoxContainer extends Component{
    static defaultProps={
        ar:[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'],
        idx:6,
        size:20
    }
    constructor(props){
        super(props);
        this.state={
            box:Array.from({length:this.props.size},(x,i)=>({color:'green',isClicked:false,id:i}))
        };
        this.addItem=this.addItem.bind(this);
    }

    addItem(id,item){
        const {ar,idx}=this.props;
        let newColor;
        do {newColor=hexColor(ar,idx);}
     while(newColor===this.state.box.color)
        const updatedBox=this.state.box.map(n=>{
            if(n.id===id){
                return {...n,isClicked:item,color:newColor}
            }else{
                return n;
            }
        });
        this.setState({box:updatedBox})
    }
    render(){
        return(
            <div className='BoxContainer'>
           {this.state.box.map(n=><Box n={n} addItem={this.addItem}/>)}
            </div>
        )
    }
}

export default BoxContainer;