import { useContext } from "react";
import { UserContext } from "../app/context";
import Images from "./Images";
import Loading from "./Loading";
import MainSearchBar from "./MainSearchBar";

const Main = () => {
  const { appState } = useContext(UserContext)!;
  return (
    <main className="main">
      {appState.isLoading ? (
        <Loading />
      ) : (
        <>
          <MainSearchBar />
          <div className="images-container">
            <Images />
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
