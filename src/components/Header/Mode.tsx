import { useContext } from "react";
import { UserContext } from "../../app/context";

const Mode = () => {
  const {
    appState: { mode },
    dispatch,
  } = useContext(UserContext)!;
  return (
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
  );
};

export default Mode;
