import { useState, useEffect } from "react";
import UserCard from "./UserCard.js";
import default_pfp from "../../default_pfp.png"
import '../../App.css';
import '../../styles.css';

/* Grid of User Cards */
function UserCardGrid() {
    const [users, setUsers] = useState([]);

    // get user data
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/users");
        
        if (!response.ok) 
          throw new Error(`HTTP error: Status: ${response.status}`);
        
        const data = await response.json();
        setUsers(data);
      } 
      catch (error) {
        console.log("Error fetching users", error);
      }
    }

    // call api on startup
    useEffect(() => {
      fetchUsers();
    }, []);

    // log users when they change
    useEffect(() => {
      console.log("users:", users);
    }, [users]);
  

    return (        
      <div className='griddisplay'>
        {users.map((user) =>  (
          <UserCard 
            key = {user.id} // unique key
            id = {user.id} // passing to props
            firstName={user.first_name} 
            lastName={user.last_name}
            profilePicture={ user.profilePicture || default_pfp}
            //graduationYear={user.graduationYear}
            //bio={user.bio}
            //major={user.major}
            email={user.email}
          />
        ))}
      </div>)
  }
  
  export default UserCardGrid;