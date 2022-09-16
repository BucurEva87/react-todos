import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Walk the cat',
          completed: false,
        },
        {
          id: 2,
          title: 'Eat the gin',
          completed: true,
        },
        {
          id: 3,
          title: 'See the sounds',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        <TodoHeader />
        <TodoInput />
        <TodoList todos={todos} />
      </>
    );
  }
}
