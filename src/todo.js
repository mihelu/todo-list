import React from 'react';
import Card, {  CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

export default class Todo extends React.Component {

	remove = e => {		
		this.props.removeAction(this.props.elem);
	}

	edit = e => {
		this.props.editAction(this.props.elem);
	}

	render() {
		return (<li>					
					  <Card >
					    <CardHeader title={"NR:." + this.props.elem.id}/>	
					    <CardContent>	
					    	<Typography type="title" color="inherit">					   
					     		{this.props.elem.value}
					     	</Typography>
					    </CardContent>
					    <CardActions>
					    	<IconButton aria-label="Edit" onClick={this.edit}>
				              <EditIcon />
				            </IconButton>
				            <IconButton aria-label="Share" onClick={this.remove}>
				              <DeleteIcon />
				            </IconButton>
					    </CardActions>
					  </Card>									
				</li>);
	}
}