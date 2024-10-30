import logo from './logo.svg';
import default_pfp from './default_pfp.png';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import './styles.css';

function NavBar() {

  return (
    <nav class="menubar">
      <h2>DISC SOCIAL APP</h2>
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Profile</button>
        <button>Log in</button>
      </div>
    </nav>
  )
}

function UserCard(props) {
  // Following boolean
  const [following, setFollowing] = useState(false);
  const [followText, setFollowText] = useState("follow");

  // Switch the boolean
  const handleFollow = () => {
    setFollowing(!following);
    setFollowText(followText === "follow" ? "following" : "follow");
  }

  const followButtonColor = following ? "var(--color-5)" : 'var(--color-1)';

  return (
    <div className='div'>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <img src={default_pfp} className="user-pfp" width={100} height={100} alt="pfp" />
      </div>
      <div>
        <button 
          classname="follow-button" 
          style={{backgroundColor: followButtonColor}} 
          onClick={handleFollow}
        >
          {followText}
        </button>
      </div>
    </div>
  )
}


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar></NavBar>
        </div>
      </header>
      <body>
        <div>
          <div class="dynamictagsmenu">
            <input type="text" placeholder="Search tags" />
            <button>Eventually JS</button>
            <button>will add</button>
            <button>and</button>
            <button>remove</button>
            <button>tags</button>
            <button>tag</button>
            <button>tag</button>
            <button>tag</button>
          </div>
        </div>

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

        <footer>
          <nav class="menubar">
            <button>Contact</button>
            <button>Careers</button>
            <button>Help</button>
          </nav>
        </footer>

        </body>
    </div>
  );
}

export default App;
