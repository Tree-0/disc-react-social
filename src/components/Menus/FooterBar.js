import '../../App.css';
import '../../styles.css';
import { Link } from 'react-router-dom';


function FooterBar() {
    return (
      <nav className="menubar">
        <div>
          <Link to="/">
            <button>Contact</button>
          </Link>
          <Link to="/">
            <button>Careers</button>
          </Link>
          <Link to="/">
            <button>Help</button>
          </Link>
        </div>
      </nav> 
    )
  }

export {FooterBar};