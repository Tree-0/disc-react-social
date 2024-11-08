import logo from './logo.svg';
import default_pfp from './default_pfp.png';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import UserProfile from "./pages/UserProfile";


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

function FooterBar() {
  return (
    <nav class="menubar">
      <div>
        <button>Contact</button>
        <button>Careers</button>
        <button>Help</button>
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

/*Individual tag component that can be added or removed from overall filter*/
function TagFilter(props) {
  return (
    <div class="tag">
      <label>{props.text}</label>
      <button onClick={() => props.handleDelete(props.tagid)}>X</button>
    </div>
  )
}

/*Encompassing search component that allows adding or removing tags*/
function TagFilterBar() {
  const [tagList, setTagList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleDelete = (tagid) => {
    setTagList(tagList.filter(tag => tag.tagid !== tagid));
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      const newTag = {
        tagid: Date.now(),
        text: inputValue.trim()
      };
      setTagList([...tagList, newTag]);
      setInputValue('');
    }
  };

  useEffect(() => {
    console.log(`updated tags: ${tagList.length} tags applied`);
  }, [tagList]);

  return (
    <div>
      <div class="dynamictagsmenu">
        <input 
          name="filterInput" 
          type="text" 
          placeholder="Search tags"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>
      <div class="dynamictagsmenu">
        {tagList.map(tag => (
            <TagFilter 
              key={tag.tagid}
              tagid={tag.tagid}
              text={tag.text} 
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
}

function App() {


  return (

    <div className="App">
      <body>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="userProfile" element={<UserProfile />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <footer>
          <FooterBar></FooterBar>
        </footer>

      </body>
    </div>
  );
}

export { NavBar, TagFilterBar, UserCard, FooterBar };

export default App;
