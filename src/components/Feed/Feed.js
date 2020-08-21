import React from "react";
import "./Feed.css";
import TweetBox from "../TweeBox/TweetBox";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      {/* Head */}
      <div className="feed__header">
        <h2>Feed Component</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      <Post />
      {/* Home */}
      {/* Home */}
      {/* Home */}
      {/* Home */}
      {/* Home */}
    </div>
  );
};

export default Feed;
