import React, { Component } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/TodoItem.module.scss';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    const { title } = this.props;

    this.state = {
      editing: false,
      newTitle: title,
    };

    this.span = React.createRef();

    this.updateTitle = this.updateTitle.bind(this);
    this.endEditing = this.endEditing.bind(this);
  }

  updateTitle(e) {
    this.setState({ newTitle: e.target.textContent });
  }

  endEditing() {
    const { id, title, updateTodo } = this.props;
    const { newTitle } = this.state;

    this.setState({ editing: false });
    updateTodo(id, newTitle);
    this.setState({ newTitle: title });
  }

  render() {
    const { id, title, completed } = this.props;
    const { completeTodo } = this.props;
    const { editing } = this.state;

    return (
      <li className={style.todoItem}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTodo(id)}
        />
        <span
          contentEditable={editing}
          suppressContentEditableWarning
          onDoubleClick={!editing ? () => {
            this.setState({ editing: true });
            this.span.current.focus();
          } : null}
          onInput={this.updateTitle}
          onBlur={(e) => {
            this.updateTitle(e);
            this.endEditing();
          }}
          className={!editing ? style['non-selectable'] : null}
          ref={this.span}
        >
          {title}
        </span>
        <button
          type="button"
          className={`edit ${style['push-right']}`}
          onClick={() => {
            if (!editing) this.setState({ editing: true });
            else { this.endEditing(); }
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="delete"
        >
          Delete
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PT.string.isRequired,
  title: PT.string.isRequired,
  completed: PT.bool.isRequired,
  completeTodo: PT.func.isRequired,
  updateTodo: PT.func.isRequired,
};
