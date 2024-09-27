import { useState } from "react";

const authenticateUser = () => {
  return true;
};
// JSX => React.createElement => Object => HTML(DOM)
export const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

// React Component
const Header = () => {
  const [isLogIn, setIsLogIn]=useState(false);
  const [title, setTitle] = useState("Food Villa");
  console.log("rendered");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        //JS Expressions & not Statements
        (isLogIn? <button onClick={()=>setIsLogIn(false)}>Logout</button>:<button onClick={()=>setIsLogIn(true)}>Login</button>)
      }
      
    </div>
  );
};

export default Header;
