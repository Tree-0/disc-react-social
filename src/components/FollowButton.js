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
  
    const followButtonColor = following ? "var(--color-5)" : 'var(--color-2)';
    const followButtonTextColor = following? "var(--color-black)" : "var(--color-white)";
  
    return (
        <div>
            <button 
            className="follow-button" 
            style={{backgroundColor: followButtonColor, color: followButtonTextColor}} 
            onClick={handleFollow}
            >
            {followText}
            </button>
        </div>
    )
}

export default FollowButton;