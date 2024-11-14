import React from "react";
import '../../App.css';
import '../../styles.css';

function FollowButton(props) {

    // Switch the boolean
    const handleFollow = () => {
      props.setFollowing(!props.following);
    }
  
    const followButtonColor = props.following ? "var(--off-white)" : 'var(--light-purple)';
    const followButtonTextColor = props.following? "var(--dark-gray)" : "var(--black)";
    const followButtonText = props.following? "Following" : "Follow";

    console.log(props.following);
    return (
        <div>
            <button 
            className="follow-button" 
            style={{backgroundColor: followButtonColor, 
                    color: followButtonTextColor}} 
            onClick={handleFollow}
            >
            {followButtonText}
            </button>
        </div>
    )
}

export default FollowButton;