import { useState } from "react";
import '../App.css';
import '../styles.css';
import { Link } from "react-router-dom";

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