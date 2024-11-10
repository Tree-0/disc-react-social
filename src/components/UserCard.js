import { useState } from "react";
import '../App.css';
import '../styles.css';

function UserCard(props) {
  // Following boolean
  const [following, setFollowing] = useState(false);
  const [followText, setFollowText] = useState("follow");

  // Switch the boolean
  const handleFollow = () => {
    setFollowing(!following);
    setFollowText(followText === "follow" ? "following" : "follow");
  }

  const followButtonColor = following ? "var(--color-5)" : 'var(--color-2)';
  const followButtonTextColor = following? "var(--color-black)" : "var(--color-white)";

  return (
    <div className='div'>
      <div>
        <p>{props.firstName + " " + props.lastName[0]}</p>
      </div>
      <div>
        <img src={props.profilePicture} className="user-pfp" width={100} height={100} alt="pfp" />
      </div>
      <div>
        <button 
          className="follow-button" 
          style={{backgroundColor: followButtonColor, color: followButtonTextColor}} 
          onClick={handleFollow}
        >
          {followText}
        </button>
      </div>
    </div>
  )
}

export default UserCard;