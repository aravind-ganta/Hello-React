import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const authenticateUser = () => {
  return true;
};

// SPA- Single Page Application
// Client side & Server side routing

// JSX => React.createElement => Object => HTML(DOM)
export const Title = () => (
  <a href="/">
    <img alt="logo" className="h-28 p-2" src={Logo} />
  </a>
);

// React Component
const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  // const [title, setTitle] = useState("Food Villa");
  const isOnline=useOnline();
  // console.log("rendered");
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      {/* <h1>{title}</h1> */}
      {/* <button onClick={() => setTitle("New Food App")}>Change title</button> */}
      <div className="nav-items">
        <ul className="flex py-10 px-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline?"Online":"Offline"}</h1>
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
