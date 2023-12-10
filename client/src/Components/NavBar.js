import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../styles/NavBar.css";
import { IconContext } from "react-icons";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";


function NavBar() {
  const Navigate = useNavigate();
  const handleLogOut = async () => {
    Navigate("/");
  };
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars"></Link>
              <h1 className="Sportify">Sportify</h1>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="button">
            <Button onClick={handleLogOut} style={{ color: "#ffffff" }}>
							<LogoutIcon color="white" />
							<span> Sign Out</span>
						</Button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
