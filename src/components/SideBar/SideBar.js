import React from "react";

// Material Icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentityOutlined";
import MoreHorizonIcon from "@material-ui/icons/MoreHorizOutlined";
import Button from "@material-ui/core/Button";

import "./SideBar.css";
import SideBarOption from "./SideBarOption";

const SideBar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitter--icon" />
      <SideBarOption text="Home" Icon={HomeIcon} active />
      <SideBarOption text="Explore" Icon={SearchIcon} />
      <SideBarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SideBarOption text="Messages" Icon={MailOutlineIcon} />
      <SideBarOption text="Bookmark" Icon={BookmarkBorderIcon} />
      <SideBarOption text="Lists" Icon={ListAltIcon} />
      <SideBarOption text="Profile" Icon={PermIdentityIcon} />
      <SideBarOption text="More" Icon={MoreHorizonIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;
