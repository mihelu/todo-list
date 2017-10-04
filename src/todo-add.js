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
				<MuiThemeProvider>	
					<div>
						<TextField id="addArea" fullWidth={true} rows={2} multiLine={true} value={this.state.text} onChange={this.handleChange}/>							
						<RaisedButton onClick={this.add} disabled={!this.state.text} label="Add" />			
					</div>
				</MuiThemeProvider>
			</div>	
			);
	}
}