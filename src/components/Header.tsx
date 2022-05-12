import { useContext } from "react";
import { UserContext } from "../app/context";
import Navbar from "./Navbar";

const Header = () => {
  const {
    appState: { mode },
    dispatch,
  } = useContext(UserContext)!;
  return (
    <header className="header">
      <h2>Image Gallery</h2>
      <Navbar />
      <div className="mode-container">
        <label htmlFor="mode">{mode === "" ? "Dark" : "Light"} Mode</label>
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_MODE",
              payload: mode === "" ? "dark" : "",
            });
          }}
          className={`mode ${mode}`}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
