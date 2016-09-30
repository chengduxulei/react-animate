import React from 'react';
import Animate from 'rc-animate';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }
  componentDidMout(){
    this.setState({
      text:'123123'
    })
  }
  render(){
    return (
      <Animate>
        <div>{this.state.text}</div>
      </Animate>
    )
  }
}