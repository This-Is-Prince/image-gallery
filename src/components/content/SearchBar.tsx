import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarType } from "../../types";

const SearchBar: FC<SearchBarType> = ({ searchPhotos }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-y-2 items-center w-full sm:w-3/4 md:w-2/4 text-white">
      <input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value.trim());
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter" && searchQuery) {
            searchPhotos(searchQuery);
          }
        }}
        type="search"
        className="block w-full px-3 py-1.5  bg-transparent border-2 rounded-md focus:outline-none"
        placeholder="Search high resolutions images"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button
        onClick={() => {
          if (searchQuery) {
            searchPhotos(searchQuery);
          }
        }}
        className="bg-transparent py-2 px-6 rounded-md border-2 text-xl"
        type="button"
        id="button-addon2"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
