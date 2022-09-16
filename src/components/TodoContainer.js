import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import style from '../styles/TodoContainer.module.scss';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Walk the cat',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Eat the gin',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'See the sounds',
          completed: false,
        },
      ],
    };

    this.completeTodo = this.completeTodo.bind(this);
  }

  completeTodo(id) {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        const copy = todo;

        if (copy.id === id) copy.completed = !copy.completed;

        return copy;
      }),
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div id={style.todoContainer}>
        <TodoHeader />
        <TodoInput />
        <TodoList
          todos={todos}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}
