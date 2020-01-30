import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.receiveTodo}>
        <label>Title
          <input type="text" value="" />
        </label>
        <br/>
        <label>Body
          <input type="text" value="" />
        </label>
        <br />
        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;