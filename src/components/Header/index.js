import "./style.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"
            alt="user"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
