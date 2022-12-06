const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="brand"><span>N</span>Blog</a>
                <div className="nav-link">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create">New Blog</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;