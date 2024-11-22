import React from "react";
import {useFollowing} from "../../contexts/FollowingContext";
import '../../App.css';
import '../../styles.css';
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

function UserCard(props) {
  // Following boolean
  const [following, toggleFollowing] = useFollowing(props.id); // le custom hook

  return (
    <div className='div'>
      <div className='userCardName'>
        <p>{props.firstName + " " + (props.lastName ? props.lastName[0] : " ")}</p>
      </div>
      <Link to={`/user/${props.id}`} 
        state={{
          id: props.id,
          firstName: props.firstName,
          lastName: props.lastName,
          //bio: props.bio,
          //graduationYear: props.graduationYear,
          //profilePicture: props.profilePicture,
          //major: props.major,
          email: props.email
        }}
      >
        <img src={props.profilePicture} className="user-pfp" width={100} height={100} alt="pfp" />
      </Link>
      <div style={{display: "flex", justifyContent:"center"}}>
        <FollowButton following={following} setFollowing={toggleFollowing}/>
      </div>
      
    </div>
  )
}

export default React.memo(UserCard);