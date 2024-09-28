import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";

const authenticateUser = () => {
  return true;
};

// SPA- Single Page Application
// Client side & Server side routing

// JSX => React.createElement => Object => HTML(DOM)
export const Title = () => (
  <a href="/">
    <img alt="logo" className="logo" src={Logo} />
  </a>
);

// React Component
const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [title, setTitle] = useState("Food Villa");
  // console.log("rendered");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change title</button>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {
        //JS Expressions & not Statements
        isLogIn ? (
          <button onClick={() => setIsLogIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLogIn(true)}>Login</button>
        )
      }
    </div>
  );
};

export default Header;
