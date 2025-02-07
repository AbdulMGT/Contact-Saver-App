import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import Header from "./Header";

const Content = () => {
  return (
    <div className="content">
      <Header title="Contact Saver" logo={logo}/>  
      <Outlet />  
      <nav>
        <ul>
          <li>
            <Link to="../New">New</Link>
          </li>
          <li>
            <Link to="../Contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Content;
