import FriendListItem from '../FriendListItem/FriendListItem';
import css from './friendList.module.css';

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

export default FriendList;
