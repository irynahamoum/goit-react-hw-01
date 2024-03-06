import css from './friendlist.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends?.map((friend) => {
        return (
          <li key={friend.id} className={css.friendsCard}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

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

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
