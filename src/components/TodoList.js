import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';
import TodoItem from './TodoItem';

import style from '../styles/TodoList.module.scss';

export default class TodoList extends PureComponent {
  render() {
    const { todos, completeTodo, updateTodo } = this.props;

    return (
      <ul id={style.todoList}>
        { todos.length && todos.map((todo) => {
          const { id, title, completed } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              title={title}
              completed={completed}
              completeTodo={completeTodo}
              updateTodo={updateTodo}
            />
          );
        })}
      </ul>
    );
  }
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PT.arrayOf(PT.shape({
    id: PT.string.isRequired,
    title: PT.string.isRequired,
    completed: PT.bool.isRequired,
  })),
  completeTodo: PT.func.isRequired,
  updateTodo: PT.func.isRequired,
};
