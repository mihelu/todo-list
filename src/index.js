import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list';

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
