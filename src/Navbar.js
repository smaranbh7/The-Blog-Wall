//Link tag is same as href. It blocks servier request and injects required content using react router\
// It also makes thr transition much quicker

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Smaran's Wall</h1>
      <div className="links">
        <Link to="/">Home</Link> 
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;