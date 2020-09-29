import React from 'react';
import '../App.css';
import Guide from './Guide'
import Input from './Input'
import DataList from './DataList'

class Upload extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    if (event.target.name === "MainButton") {
      this.props.history.push('/')
    }

    if (event.target.name === 'LoginButton') {
      this.props.history.push('/Login')
  }

  }

  render (){
  return (
    <div>
        <Guide onClick = {this.handleClick} page = "upload"></Guide>
        <Input />
        <DataList/>
    </div>
  );
}

}


export default Upload;
