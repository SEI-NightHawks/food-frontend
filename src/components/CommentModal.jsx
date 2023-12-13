import { useState, useEffect } from "react";
import { getPostComments } from "../services/comments.js";
import { createComment } from "../services/comments.js";
import Modal from "react-modal";
import axios from "axios";

const CommentModal = ({ isOpen, onRequestClose, post, user }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [toggle]);

  //fetiching comments
  async function fetchComments() {
    const commentsData = await getPostComments(post?.id);
    setComments(commentsData);
  }
  //submitting cpomments
  async function submitComment() {
    console.log("User Object:", user);
    const commentData = {
      user_profile: user.id,
      comment: commentText,
      post: post.id,
    };
    // console.log("Comment Data:", commentData);
    try {
      const response = await createComment(post.id, commentData);
      setToggle((prev) => !prev);
      setCommentText("");
    } catch (error) {}
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comment Modal"
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black opacity-95"
    >
      <div className="bg-white rounded-lg p-6">
        {/* Add your comment section content here */}
        {user && (
          <div>
            <textarea
              className="w-full p-4"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button
              onClick={submitComment}
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Comment
            </button>
          </div>
        )}
        {/* {user && <p>user is signed in</p>} */}
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-center space-x-4 mb-2">
            <img
              src={comment.user_profile.profile_pic_url}
              alt="Profile Pic"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">
                {comment.user_profile.user.username}
              </p>
              <p className="text-gray-600">{comment.comment}</p>
            </div>
          </div>
        ))}
        {/* Add your comment form or input fields here */}
        <button
          onClick={onRequestClose}
          className="bg-red-200 hover:bg-red-500 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CommentModal;
