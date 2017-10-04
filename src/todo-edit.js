import React from 'react';

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
					Edit todo
					<textarea value={this.state.elem.value} onChange={this.handleChange}></textarea>
					<button onClick={this.cancel}>Cancel</button>
					<button onClick={this.save}>Save</button>
				</div>);
	}
}