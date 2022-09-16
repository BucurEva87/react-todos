import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/TodoItem.module.scss';

export default class TodoItem extends PureComponent {
  render() {
    const { id, title, completed } = this.props;
    const { completeTodo } = this.props;

    return (
      <li className={style.todoItem}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTodo(id)}
        />
        <span>{title}</span>
        <button
          type="button"
          className={`edit ${style['push-right']}`}
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  completeTodo: PropTypes.func.isRequired,
};
