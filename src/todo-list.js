import React from 'react';
import Todo from './todo';
import TodoAdd from './todo-add';
import TodoEdit from './todo-edit';

export default class TodoList extends React.Component {	

	state = {
			elements : [{id: 1,
					   value:'Test'},
					  {id: 2,
					  value:'Test1'}],
			isEdit : false
			}

	add = text => {
		this.setState((state,props) => {	
	  		 	state.elements.push({
				  					id: new Date().getTime(),
				  					value: text
			  					});		  	
	  		 	return {
	  				elements: state.elements
	  			}
	  		})
	}

	edit = todo => {
		this.setState((state,props) => { 
			return {
				isEdit: true,
				editTodo : todo
			}
		 })
	}

	update = todo => {		
		this.setState((state,props) => { 
			state.elements.filter(elem => elem.id === todo.id)[0].value = todo.value;
			return {
				elements: state.elements,
				isEdit: false,
				editTodo : null
			}
		 })
	}

	cancel = () => {		
		this.setState((state,props) => { 
			return {
				isEdit: false,
				editTodo : null
			}
		 })
	}

	remove = todo => {
		this.setState(function(state,props) {
			return {
		  		elements: state.elements.filter(elem => elem.id !== todo.id),
		  		isEdit: false,
				editTodo : null
			}
		})
	}

	render() {
		const rows = this.state.elements.map((todo) => 
			<Todo removeAction={this.remove} editAction={this.edit} key={todo.id} elem={todo} />		
		);
		return (<div>
					{this.state.isEdit ? 
						(<TodoEdit updateAction={this.update} cancelAction={this.cancel} elem={this.state.editTodo} />) 
						: (<TodoAdd addAction={this.add} />) }			
					<ul>	
						{rows}
					</ul>
				</div>);
	}
}