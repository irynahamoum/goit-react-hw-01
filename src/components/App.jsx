// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '../../../../../vite.svg';
import './App.css';
import Profile from './Profile/Profile';
import userData from '../userData.json';

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
    </>
  );
}
