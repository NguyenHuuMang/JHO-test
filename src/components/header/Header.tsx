import { useNavigate } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/images/logo-jho.png";
import searchIcon from "../../assets/images/Search.png";
import notificationIcon from "../../assets/images/Notification.png";
import messageIcon from "../../assets/images/Message.png";
import settingsIcon from "../../assets/images/Setting.png";
import avatarDefault from "../../assets/images/avatar-default.jpg";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/contacts");
  }

  console.log(currentUser?.avatar);

  return (
    <div className="header-component">
      <img
        src={logo}
        alt="logo-header"
        className="logo-icon"
        onClick={handleRedirect}
      />
      <div className="search-container">
        <div className="input-wrapper">
          <img src={searchIcon} alt="search-icon" className="search-icon" />
          <input
            type="text"
            className="input-search"
            placeholder="Rechercher dans Metaforma"
          />
        </div>
        <div className="circle-plus">+</div>
      </div>
      <div className="setting-info">
        <img
          src={notificationIcon}
          alt="notificationIcon"
          className="cursor-icon"
        />
        <img src={messageIcon} alt="messageIcon" className="cursor-icon" />
        <img src={settingsIcon} alt="settingsIcon" className="cursor-icon" />
        <div className="get-me">
          <img
            src={currentUser?.avatar ? currentUser?.avatar : avatarDefault}
            alt="avatar"
            className="avatar"
          />
          <div className="info">
            <div className="fullname">{currentUser?.name}</div>
            <div className="role">{currentUser?.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
