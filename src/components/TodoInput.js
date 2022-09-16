import React, { Component } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/TodoInput.module.scss';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(e) {
    this.setState({ todoTitle: e.target.value });
  }

  render() {
    const { addTodo } = this.props;
    const { todoTitle } = this.state;

    return (
      <form>
        <input
          type="text"
          id={style.todoInput}
          value={todoTitle}
          placeholder="Insert another Todo task..."
          onChange={this.changeTitle}
        />
        <button
          type="button"
          id={style.btnSubmit}
          onClick={() => {
            addTodo(todoTitle);
            this.setState({ todoTitle: '' });
          }}
        >
          Add todo
        </button>
      </form>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PT.func.isRequired,
};
