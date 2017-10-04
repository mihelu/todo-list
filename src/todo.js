import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Todo extends React.Component {

	remove = e => {		
		this.props.removeAction(this.props.elem);
	}

	edit = e => {
		this.props.editAction(this.props.elem);
	}

	render() {
		return (<li>
					<MuiThemeProvider>
					  <Card>
					    <CardHeader
					      title={"NR:." + this.props.elem.id}
					      actAsExpander={false}
					      showExpandableButton={false}
					    />	
					    <CardText expandable={false}>
					     	{this.props.elem.value}
					    </CardText>
					    <CardActions>
					      <FlatButton  onClick={this.remove} label="Remove" />
					      <FlatButton onClick={this.edit} label="Edit" />
					    </CardActions>
					  </Card>
					  </MuiThemeProvider>					
				</li>);
	}
}