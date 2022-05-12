import { useContext } from "react";
import { UserContext } from "../app/context";
import Images from "./Images/Images";
import Loading from "./Loading";
import MainSearchBar from "./MainSearchBar";

const Main = () => {
  const {
    appState: { images, isLoading },
  } = useContext(UserContext)!;

  return (
    <main className="main">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainSearchBar />
          <div className="images-container">
            {images !== null && images.length > 0 ? (
              <Images images={images} />
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
