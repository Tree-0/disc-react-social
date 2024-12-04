// Lifted following state to a higher context, so it's now a dictionary of {id : follow status}
// This lets you follow someone on either the Home page or the more detailed user page and the 
// follow status will persist.

import React, { createContext, useContext, useState } from 'react';

const FollowingContext = createContext();

const FollowingProvider = ({ children }) => {
  // State to keep track of following status for each user by user ID
  const [followingStatus, setFollowingStatus] = useState({});

  // Toggle following status for a specific user
  const toggleFollowing = (userId) => {
    setFollowingStatus((prevStatus) => ({
      ...prevStatus,
      [userId]: !prevStatus[userId],
    }));
  };

  return (
    <FollowingContext.Provider value={{ followingStatus, toggleFollowing }}>
      {children}
    </FollowingContext.Provider>
  );
};

// le custom hook 
const useFollowing = (userId) => {
  const { followingStatus, toggleFollowing } = useContext(FollowingContext);

  return [
    followingStatus[userId] || false, // return user status false by default
    () => toggleFollowing(userId)
  ];
};

export {useFollowing, FollowingProvider};