import '../App.css';
import '../styles.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="menubar">
      <h2>DISC SOCIAL APP</h2>
      <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/">
            <button>About</button>    
          </Link>
          <Link to="/userprofile">
            <button>Profile</button>    
          </Link>
          <Link to="/">
            <button>Log in</button>    
          </Link>
      </div>
    </nav>
  )
}

export {NavBar};