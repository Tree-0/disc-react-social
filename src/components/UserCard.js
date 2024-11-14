import React from "react";
import { useState } from "react";
import '../App.css';
import '../styles.css';
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

function UserCard(props) {
  // Following boolean
  const [following, setFollowing] = useState(false);

  return (
    <div className='div'>
      <div className='userCardName'>
        <p>{props.firstName + " " + props.lastName[0]}</p>
      </div>
      <Link to="/userProfile" 
        state={{
          firstName: props.firstName,
          lastName: props.lastName,
          bio: props.bio,
          graduationYear: props.graduationYear,
          profilePicture: props.profilePicture,
          major: props.major,
          email: props.email
        }}>
        <img src={props.profilePicture} className="user-pfp" width={100} height={100} alt="pfp" />
      </Link>
      <div style={{display: "flex", justifyContent:"center"}}>
        <FollowButton following={following} setFollowing={setFollowing}/>
      </div>
      
    </div>
  )
}

export default React.memo(UserCard);