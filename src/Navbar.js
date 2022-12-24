import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="brand"><span>N</span>Blog</a>
                <div className="nav-link">
                    <ul>
                        <li><Link to="/" className="a">Home</Link></li>
                        <li><Link to="/create" className="a">New Blog</Link></li>
                        <li><Link to="/faq" className="a">FAQ</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;