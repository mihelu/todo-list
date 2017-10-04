import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
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
		return (<div>
					<MuiThemeProvider>	
						<div>
							<TextField rows={2} fullWidth={true} multiLine={true} value={this.state.elem.value} onChange={this.handleChange}/>							
							<RaisedButton onClick={this.cancel} label="Cancel" />							
							<RaisedButton onClick={this.save}  disabled={!this.state.elem.value} label="Save" />								
						</div>
					</MuiThemeProvider>
				</div>);
	}
}