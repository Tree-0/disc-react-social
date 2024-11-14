import './App.css';
import './styles.css';

import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import UserPage from "./pages/UserPage.js";

import { NavBar } from './components/Menus/NavBar.js';
import { FooterBar } from './components/Menus/FooterBar.js';
import UserCard from './components/UserComponents/UserCard.js';
import UserCardGrid from './components/UserComponents/UserCardGrid.js';
import { TagFilterBar } from './components/Search/TagFilterBar.js';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="user/:id" element={<UserPage />} />
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
