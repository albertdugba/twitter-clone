import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/RepeatOneOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FaceOutlined";
import PublishIcon from "@material-ui/icons/PublicOutlined";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1280584816103211011/wiTwzhzK_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Albert Dugba{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                Albert_Dugba
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>This is the first tweet</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
