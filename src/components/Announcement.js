import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/Announcement.module.scss';

// console.log(style.announcement);

export default class Announcement extends PureComponent {
  render() {
    const {
      type, message, elapsed, duration,
    } = this.props;

    return (
      <div
        className={`${style.announcement} ${style[type]}`}
        style={{ opacity: elapsed > (duration * (3 / 4)) ? 0.75 : 1 }}
      >
        <div
          className={style.bar}
          style={{
            width: `${100 - (elapsed / (duration / 100))}%`,
            opacity: elapsed > (duration * (3 / 4)) ? 0.5 : 1,
          }}
        />
        {message}
      </div>
    );
  }
}

Announcement.defaultProps = {
  type: 'info',
  duration: 5000,
};

Announcement.propTypes = {
  type: PT.string,
  message: PT.string.isRequired,
  duration: PT.number,
  elapsed: PT.number.isRequired,
};
