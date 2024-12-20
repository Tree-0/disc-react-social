import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import {useFollowing} from "../../contexts/FollowingContext";

// Generic component? At least, that was the goal when making this, but 
// let me know if I misunderstood how to make one or if this one is too specialized
const UserProfile = () => {
  const location = useLocation();
  const { 
    id,
    firstName, 
    lastName, 
    //major, 
    //bio, 
    //graduationYear, 
    profilePicture, 
    email
  } = location.state || {}; 

  const [following, toggleFollowing] = useFollowing(id);
  
  return (
    <div className='div'>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div className='div' 
        style={{
          display:"flex", 
          flexDirection:"row", 
          justifyContent:"center",
          margin:"10px"}}>

        <img className="user-pfp" src={profilePicture} alt=""
          style={{padding:"10px", width:"250", height:"250"}}/>

        <div style={{display:"flex", flexDirection:"column"}}>
          <h1>{firstName + " " + lastName}</h1>

          <FollowButton following={following} setFollowing={toggleFollowing}/>
          
          {/* <h2>{graduationYear + " "}</h2>
          <h2>{" " + major}</h2> */}
        </div>
      </div>
      <div>
        {/* <p>{bio}</p> */}
        <p>{email}</p>
      </div>
    </div>  
  )
  };
  
export default UserProfile;