import React from 'react';

export default class TodoAdd extends React.Component {

	state = {
		text : ''
	}

  	handleChange = event => {
    	this.setState({text: event.target.value});
  	}

	add = e => {
		this.props.addAction(this.state.text)
		this.setState((state,props) => {
			return {
				text : ''
			}
		})
	}

	render() {
		return (
			<div>
				<textarea value={this.state.text} onChange={this.handleChange}></textarea>
				<button onClick={this.add}>Add</button>
			</div>	
			);
	}
}