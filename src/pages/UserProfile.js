import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const { firstName, lastName, major, bio, graduationYear, profilePicture, email } = location.state || {}; 
  
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
          margin:"10 10 10 10"}}>
        <img className="user-pfp" src={profilePicture} alt=""
          style={{padding:"10px", width:"250", height:"250"}}/>
        <div style={{display:"flex", flexDirection:"column"}}>
          <h1>{firstName + " " + lastName}</h1>
          <button className="follow-button">Follow</button>
          <h2>{graduationYear + " "}</h2>
          <h2>{" " + major}</h2>
        </div>
      </div>
      <div>
        <p>{bio}</p>
        <p>{email}</p>
      </div>
    </div>  
  )
  };
  
export default UserProfile;