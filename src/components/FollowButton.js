import React from "react";
import { useState } from "react";
import '../App.css';
import '../styles.css';

function FollowButton({following, setFollowing}) {
    const [followText, setFollowText] = useState("follow");

    // Switch the boolean
    const handleFollow = () => {
      setFollowing(!following);
      setFollowText(followText === "follow" ? "following" : "follow");
    }
  
    const followButtonColor = following ? "var(--off-white)" : 'var(--light-purple)';
    const followButtonTextColor = following? "var(--dark-gray)" : "var(--black)";
  
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