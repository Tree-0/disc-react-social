import {NavBar, TagFilterBar, UserCardGrid} from "../App.js"


const Home = () => {
    return (       
      <div>
        <NavBar/>
        
        <TagFilterBar/>

        {/* Grid of User Cards */}
        <div>
          <div className='griddisplay' style={{display: "flex", justifyContent: 'center'}}>
            <UserCardGrid/>
          </div>
        </div>
        
      </div>)
  };
  
export default Home;