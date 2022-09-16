import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import AnnouncementContainer from './AnnouncementContainer';

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
      announcements: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(title) {
    const { todos } = this.state;
    const titleLower = title.toLowerCase();

    if (!titleLower) {
      this.addAnnouncement('You can not add an empty task.', 'error');
      return;
    }

    const todo = todos.find((todo) => todo.title.toLowerCase() === titleLower);

    if (todo) {
      this.addAnnouncement('This todo task already exists.', 'error');

      return;
    }

    this.setState((prevState) => {
      const { todos } = prevState;

      return {
        todos: [...todos, {
          id: uuidv4(),
          title,
          completed: false,
        }],
      };
    });
    this.addAnnouncement('Todo task added successfully!', 'success');
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

  addAnnouncement(message, type, durration) {
    this.setState((prevState) => {
      const { announcements } = prevState;
      const announcementId = uuidv4();

      return {
        announcements: [...announcements, {
          id: announcementId,
          type,
          message,
          durration,
        }],
      };
    });
  }

  render() {
    const { todos, announcements } = this.state;

    return (
      <div id={style.todoContainer}>
        <TodoHeader />
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          todos={todos}
          completeTodo={this.completeTodo}
        />
        { announcements.length && <AnnouncementContainer announcements={announcements} /> }
      </div>
    );
  }
}
