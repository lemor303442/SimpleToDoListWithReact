import React, { Component } from 'react'


export default class Input extends Component{
  constructor(props){
		super(props)
		this.state = { 
      text: ''
    }
  }
  handleOnInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addToDo(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    const { text } = this.state
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={text} onChange={this.handleOnInputChange.bind(this)} />
        <input type="submit" value="ADD" />
      </form>
    )
  }
}