import React from 'react';
import Card, {  CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
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
		this.setState({text : ''})
	}

	render() {
		return (<Card>
					<CardHeader>					      	
						
				    </CardHeader>
					<CardContent>
						<TextField id="addArea" fullWidth rowsMax={5} multiline value={this.state.text} onChange={this.handleChange}/>	
					</CardContent>
				    <CardActions>
				    	<Button raised color="primary" onClick={this.add} disabled={!this.state.text}>Add</Button>			
				    </CardActions>												
				</Card>	
			);
	}
}