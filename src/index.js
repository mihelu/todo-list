import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list';
import './style.css';

class TodoApp extends React.Component {
	render() {		
		return (
				<TodoList />		
			);
	}
}

// ========================================

ReactDOM.render(
	<TodoApp />,
	document.getElementById('root')
	);
