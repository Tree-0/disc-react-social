import '../App.css';
import '../styles.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="menubar">
      <h2>DISC SOCIAL APP</h2>
      <div>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/">
            <button>About</button>    
          </Link>
          <Link to="/">
            <button>Profile</button>    
          </Link>
          <Link to="/">
            <button>Log in</button>    
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export {NavBar};