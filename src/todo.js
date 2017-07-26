import React from 'react';

export default class Todo extends React.Component {

	remove = e => {		
		this.props.removeAction(this.props.elem);
	}

	edit = e => {
		this.props.editAction(this.props.elem);
	}

	render() {
		return (<li>
					<button onClick={this.remove}>X</button>
					<button onClick={this.edit}>E</button>
					{this.props.elem.value}
				</li>);
	}
}