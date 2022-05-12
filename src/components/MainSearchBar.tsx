import SearchBar from "./SearchBar/SearchBar";

const MainSearchBar = () => {
  return (
    <section className="main-search-bar">
      <h1 className="heading">Download High Quality Images by creators</h1>
      <p className="desc">
        Over 2.4 million+ stock Images by our talented community
      </p>
      <SearchBar />
    </section>
  );
};

export default MainSearchBar;
