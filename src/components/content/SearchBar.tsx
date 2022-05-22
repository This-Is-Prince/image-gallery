import { FaSearch } from "react-icons/fa";
import { unsplash } from "../../api/unsplash";
import { useAppContext } from "../../app/context";

const SearchBar = () => {
  const { state, dispatch } = useAppContext()!;
  return (
    <div className="flex flex-col gap-y-2 items-center w-full sm:w-3/4 md:w-2/4 text-white">
      <input
        value={state.query}
        onChange={(e) => {
          dispatch({ type: "ADD_QUERY", payload: e.target.value });
        }}
        onKeyUp={async (e) => {
          if (e.key === "Enter" && state.query.trim()) {
            const res = await unsplash.search.getPhotos({
              query: state.query.trim(),
            });
            if (res.response) {
              dispatch({ type: "ADD_IMAGES", payload: res.response.results });
            }
          }
        }}
        type="search"
        className="block w-full px-3 py-1.5  bg-transparent border-2 rounded-md focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button
        onClick={async () => {
          if (state.query.trim()) {
            const res = await unsplash.search.getPhotos({
              query: state.query.trim(),
            });
            if (res.response) {
              dispatch({ type: "ADD_IMAGES", payload: res.response.results });
            }
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
