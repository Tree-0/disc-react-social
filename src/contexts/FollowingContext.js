import React, { createContext, useState, useContext } from 'react';

const FollowingContext = createContext();

export const FollowingProvider = ({ children }) => {
  const [following, setFollowing] = useState(false);

  return (
    <FollowingContext.Provider value={{ following, setFollowing }}>
      {children}
    </FollowingContext.Provider>
  );
};

// custom hook
// This is to enable a functional FollowButton that can interact with state
// when redirecting from the Home page to the UserProfile page.
export const useFollowing = () => useContext(FollowingContext);
