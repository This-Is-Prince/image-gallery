import { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

const Navbar = () => {
  const clearIcon = useRef<HTMLButtonElement | null>(null);
  const searchBar = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchBar !== null && searchBar.current !== null) {
      searchBar.current.addEventListener("keyup", function (e) {
        if (clearIcon && clearIcon.current) {
          if (this.value && clearIcon.current.style.visibility != "visible") {
            clearIcon.current.style.visibility = "visible";
          } else if (!this.value) {
            clearIcon.current.style.visibility = "hidden";
          }
        }
      });
    }
    if (clearIcon !== null && clearIcon.current !== null) {
      clearIcon.current.addEventListener("click", function (e) {
        if (searchBar && searchBar.current) {
          searchBar.current.value = "";
        }
        this.style.visibility = "hidden";
      });
    }
  }, [clearIcon, searchBar]);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <button className="search-btn search-icon">
          <AiOutlineSearch />
        </button>
        <input
          ref={searchBar}
          className="search"
          placeholder="Search"
          type="text"
        />
        <button ref={clearIcon} className="search-btn clear-icon">
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
