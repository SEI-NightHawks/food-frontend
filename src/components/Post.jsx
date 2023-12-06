import React from 'react';

const Card = ({ profileName, profileImage, caption, postImage }) => {
  return (
    <div className="post-card">
      <div className="user-info">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <span className="profile-name">{profileName}</span>
      </div>
      <div className="post-image-container">
        <img className="post-image" src={postImage} alt="Post" />
      </div>
      <div className="interaction-buttons">
        <div className="heart-container">
          {/* Heart icon */}
          <button className="heart-button">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </button>
          {/* Display like count */}
          <span className="like-count">100 likes</span>
        </div>
        {/* Comment button */}
        <button className="comment-button">Comment</button>
        {/* Share button */}
        <button className="share-button">Share</button>
      </div>
      {/* Caption */}
      <div className="caption">{caption}</div>
    </div>
  );
};

export default Card;
