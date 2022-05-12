import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <SearchBar />
      <div className="links-wrapper">
        <a href="#" className="navbar-link">
          Explore
        </a>
        <a href="#" className="navbar-link">
          Collection
        </a>
        <a href="#" className="navbar-link">
          Community
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
