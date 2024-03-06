import './App.css';
import Profile from './Profile/Profile';
import userData from '../assets/userData.json';
import FriendList from './FriendList/FriendList';
import friendsData from '../assets/friendsData.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionHistory from '../assets/transactionHistory.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
}
