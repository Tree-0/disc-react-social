import React from "react";
import { useLocation } from "react-router-dom";
import UserProfile from "../components/UserComponents/UserProfile";

const UserPage = () => {
  const location = useLocation();
  const userData = location.state;

  return (
    <div>
      {userData ? (
        <UserProfile {...userData} />
      ) : (
        <p>No User Data Found</p>
      )}
    </div>
  )
}

export default UserPage;