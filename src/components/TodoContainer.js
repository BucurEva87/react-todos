import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import AnnouncementContainer from './AnnouncementContainer';

import style from '../styles/TodoContainer.module.scss';
// import TestParent from './TestParent';

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
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.ticker = setInterval(() => {
      this.setState((prevState) => {
        const { announcements } = prevState;

        return {
          announcements: announcements.map((announcement) => {
            const copy = announcement;

            copy.elapsed += 500;

            return copy;
          }).filter((announcement) => announcement.elapsed <= announcement.duration),
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
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

  updateTodo(id, title) {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      this.addAnnouncement(`No todo task with id ${id} exists.`, 'error');
      return;
    }

    this.setState({
      todos: todos.map((todo) => {
        const copy = todo;

        if (copy.id === id) copy.title = title;

        return copy;
      }),
    });

    this.addAnnouncement('Todo task title was successfully updated!', 'succes');
  }

  addAnnouncement(message, type, duration = 15000) {
    this.setState((prevState) => {
      const { announcements } = prevState;
      const announcementId = uuidv4();

      return {
        announcements: [...announcements, {
          id: announcementId,
          type,
          message,
          duration,
          elapsed: 0,
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
          updateTodo={this.updateTodo}
        />
        { announcements.length && <AnnouncementContainer announcements={announcements} /> }
      </div>
    );
  }
}
