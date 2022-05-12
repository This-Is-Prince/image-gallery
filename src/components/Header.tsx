import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <h2>Image Gallery</h2>

      <Navbar />
      <div className="mode-container">
        <label htmlFor="mode">Dark Mode</label>
        <input type="checkbox" name="dark-mode" id="mode" />
      </div>
    </header>
  );
};

export default Header;
