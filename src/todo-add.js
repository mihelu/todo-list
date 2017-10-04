import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
				Add todo
				<MuiThemeProvider>	
					<TextField rows="2" multiLine="true" value={this.state.text} onChange={this.handleChange}/>			
				</MuiThemeProvider>		
				<MuiThemeProvider>	
					<RaisedButton onClick={this.add} label="Add" />			
				</MuiThemeProvider>
			</div>	
			);
	}
}