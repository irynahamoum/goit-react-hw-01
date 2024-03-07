import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = isOnline ? css.online : css.offline;
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={`${onlineStatus}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
