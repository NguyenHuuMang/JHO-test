import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

import documentIcon from "../../assets/images/nav-document.png";
import userIcon from "../../assets/images/nav-user.png";
import menuIcon from "../../assets/images/nav-menu.png";
import peopleIcon from "../../assets/images/nav-people.png";
import educationIcon from "../../assets/images/nav-education.png";
import noteIcon from "../../assets/images/nav-note.png";
import favoriteIcon from "../../assets/images/nav-favorite.png";
import uploadIcon from "../../assets/images/nav-upload.png";
import fileIcon from "../../assets/images/nav-file.png";
import taskIcon from "../../assets/images/nav-task.png";
import listIcon from "../../assets/images/nav-list.png";

const icons = [
  { icon: documentIcon, path: "/documents" },
  { icon: userIcon, path: "/users" },
  { icon: menuIcon, path: "/menu" },
  { icon: peopleIcon, path: "/people" },
  { icon: educationIcon, path: "/education" },
  { icon: noteIcon, path: "/notes" },
  { icon: favoriteIcon, path: "/favorites" },
  { icon: uploadIcon, path: "/upload" },
  { icon: fileIcon, path: "/files" },
  { icon: taskIcon, path: "/contacts" },
  { icon: listIcon, path: "/lists" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="navbar-component">
      {icons.map((item, index) => (
        <img
          key={index}
          className={`navbar-icon ${
            location.pathname === item.path ? "active-path" : ""
          }`}
          onClick={() => navigate(item.path)}
          alt="icon"
          src={item.icon}
        />
      ))}
    </nav>
  );
};

export default NavBar;
