import './App.css';
import './styles.css';

import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import UserProfile from "./pages/UserProfile";

import { NavBar } from './components/NavBar';
import { FooterBar } from './components/FooterBar';
import UserCard from './components/UserCard.js';
import UserCardGrid from './components/UserCardGrid';
import { TagFilterBar } from './components/TagFilterBar.js';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="userProfile" element={<UserProfile />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <footer>
        <FooterBar></FooterBar>
      </footer>
    </div>
  );
}

export { NavBar, TagFilterBar, UserCard, UserCardGrid, FooterBar };

export default App;
