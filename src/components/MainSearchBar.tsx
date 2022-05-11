import { useContext } from "react";
import { UserContext } from "../app/context";

const MainSearchBar = () => {
  const { appState } = useContext(UserContext)!;
  const image = appState.mainBgImage!;
  console.log(image);
  return (
    <section
      className="main-search-bar"
      style={{
        backgroundImage: `url(${image.links.download})`,
      }}
    >
      <h1 className="heading">Download High Quality Images by creators</h1>
      <p className="desc">
        Over 2.4 million+ stock Images by our talented community
      </p>
    </section>
  );
};

export default MainSearchBar;
