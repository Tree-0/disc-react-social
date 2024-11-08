import {NavBar, TagFilterBar, UserCard} from "../App.js"


const Home = () => {
    return (       
      <div>
        <NavBar></NavBar>
        
        <TagFilterBar></TagFilterBar>

        {/* Grid of User Cards */}
        <div className='griddisplay'>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        <UserCard name="User"></UserCard>
        </div>
      </div>)
  };
  
  export default Home;