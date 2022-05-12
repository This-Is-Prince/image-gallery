import { AiOutlineSearch } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <button className="search-btn search-icon">
          <AiOutlineSearch />
        </button>
        <input className="search" placeholder="Search" type="text" />
        <button className="search-btn clear-icon">
          <TiDelete />
        </button>
      </div>
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
