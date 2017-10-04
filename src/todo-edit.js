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
						<TextField rows="2" multiLine="true" value={this.state.elem.value} onChange={this.handleChange}/>			
					</MuiThemeProvider>		
					<MuiThemeProvider>	
						<RaisedButton onClick={this.cancel} label="Cancel" />			
					</MuiThemeProvider>
					<MuiThemeProvider>	
						<RaisedButton onClick={this.save} label="Save" />			
					</MuiThemeProvider>
				</div>);
	}
}