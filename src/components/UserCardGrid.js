import { useState, useEffect } from "react";
import UserCard from "./UserCard.js";
import default_pfp from "../default_pfp.png"
import '../App.css';
import '../styles.css';

/* Grid of User Cards */
function UserCardGrid() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
        const data = await response.json();
        setUsers(data);
      }
  
      fetchUsers();
    }, [users]);
  
    console.log(users);
    return (        
      <div className='griddisplay'>
        {users.map((user) =>  (
          <UserCard 
            firstName={user.firstName} 
            lastName={user.lastName}
            profilePicture={ user.profilePicture || default_pfp}
            graduationYear={user.graduationYear}
            bio={user.bio}
            major={user.major}
            email={user.email}
            >
          </UserCard>
        ))}
      </div>)
  }
  
  export default UserCardGrid;