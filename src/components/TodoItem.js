import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends PureComponent {
  render() {
    const { id, title, completed } = this.props;

    return (
      <li>
        <input type="checkbox" checked={completed} />
        <span>{title}</span>
        <button type="button" className="edit">Edit</button>
        <button type="button" className="delete">Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
