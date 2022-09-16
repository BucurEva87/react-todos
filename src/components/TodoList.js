import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodoList extends PureComponent {
  render() {
    const { todos, completeTodo } = this.props;

    return (
      <ul>
        { todos.length && todos.map((todo) => {
          const { id, title, completed } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              title={title}
              completed={completed}
              completeTodo={completeTodo}
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
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  completeTodo: PropTypes.func.isRequired,
};
