import React, { PureComponent } from 'react';
import { PropTypes as PT } from 'prop-types';

import style from '../styles/AnnouncementContainer.module.scss';
import Announcement from './Announcement';

export default class AnnouncementContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.durration = 4000;
  }

  render() {
    const { announcements } = this.props;

    return (
      <div id={style.announcementContainer}>
        {announcements.map((announcement) => {
          const {
            id, type, message, durration,
          } = announcement;

          return (
            <Announcement
              key={id}
              id={id}
              type={type}
              message={message}
              durration={durration ?? this.durration}
            />
          );
        })}
      </div>
    );
  }
}

AnnouncementContainer.propTypes = {
  announcements: PT.arrayOf(PT.shape({
    id: PT.string.isRequired,
    type: PT.string,
    message: PT.string.isRequired,
    durration: PT.number,
  })).isRequired,
};
