import {NavBar, TagFilterBar, UserCardGrid} from "../App.js"


const Home = () => {
    return (       
      <div>
        <NavBar></NavBar>
        
        <TagFilterBar></TagFilterBar>

        {/* Grid of User Cards */}
        <div>
          <div className='griddisplay' style={{display: "flex", justifyContent: 'center'}}>
            <UserCardGrid></UserCardGrid>
          </div>
        </div>
        
      </div>)
  };
  
export default Home;