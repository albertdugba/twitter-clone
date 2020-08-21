import React from "react";

import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1280584816103211011/wiTwzhzK_400x400.jpg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          placeholder="Enter image Url"
          className="tweetbox__input--image"
        />
        <Button className="tweetbox__button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
