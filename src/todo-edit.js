import React from 'react';
import Card, { CardHeader, CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

export default class TodoEdit extends React.Component {

	state = {
		elem : this.props.elem
	}

	componentWillReceiveProps = nextProps => {
		this.setState((state,props) => {
			return {
				elem: nextProps.elem
			}
		})
	}	

  	handleChange = event => {
  		const text = event.target.value;
  		this.setState((state,props) => {
			return {
				elem: {
					id: state.elem.id,
					value: text
				}
			}
		})
  	}

	cancel = e => {
		this.props.cancelAction()
	}

	save = e => {
		this.props.updateAction(this.state.elem)
	}
	
	render() {
		return (						
			<Card >
				<CardHeader>					      	
					
			    </CardHeader>
				<CardContent>
					<TextField rowsMax={5} fullWidth={true} multiline={true} value={this.state.elem.value} onChange={this.handleChange}/>	
				</CardContent>
		    	<CardActions>						
					<Button raised color="accent" onClick={this.cancel}>Cancel</Button>							
					<Button raised color="primary" onClick={this.save}  disabled={!this.state.elem.value}>Save</Button>
				</CardActions>												
			</Card>
			);
	}
}