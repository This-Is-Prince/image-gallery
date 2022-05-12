import { useEffect, useRef, FC, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { unsplash } from "../../api/unsplash";
import { UserContext } from "../../app/context";
import { SearchBarProps } from "../../types";

const SearchBar: FC<SearchBarProps> = () => {
  const { dispatch } = useContext(UserContext)!;
  const clearIcon = useRef<HTMLButtonElement | null>(null);
  const searchBar = useRef<HTMLInputElement | null>(null);

  const search = () => {
    if (searchBar && searchBar.current && searchBar.current.value !== "") {
      let query = searchBar.current.value;
      unsplash.search
        .getPhotos({
          query,
          page: 1,
          perPage: 10,
          color: "green",
          orientation: "portrait",
        })
        .then((data) => {
          if (
            data !== undefined &&
            data.response !== undefined &&
            data.response.results !== undefined
          ) {
            dispatch({
              payload: data.response.results,
              type: "ADD_IMAGES",
            });
          }
        });
    }
  };

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
    <div className="wrapper">
      <button
        onClick={() => {
          search();
        }}
        className="search-btn search-icon"
      >
        <AiOutlineSearch />
      </button>
      <input
        ref={searchBar}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
        className="search"
        placeholder="Search"
        type="text"
      />
      <button ref={clearIcon} className="search-btn clear-icon">
        <TiDelete />
      </button>
    </div>
  );
};

export default SearchBar;
