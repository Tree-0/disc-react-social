import React from "react";
import { useState } from "react";
import '../../App.css';
import '../../styles.css';

function FollowButton(props) {
    const [followText, setFollowText] = useState("follow");

    // Switch the boolean
    const handleFollow = () => {
      props.setFollowing(!props.following);
      setFollowText(followText === "follow" ? "following" : "follow");
    }
  
    const followButtonColor = props.following ? "var(--off-white)" : 'var(--light-purple)';
    const followButtonTextColor = props.following? "var(--dark-gray)" : "var(--black)";
  
    return (
        <div>
            <button 
            className="follow-button" 
            style={{backgroundColor: followButtonColor, 
                    color: followButtonTextColor}} 
            onClick={handleFollow}
            >
            {followText}
            </button>
        </div>
    )
}

export default FollowButton;