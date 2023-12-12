import { useState, useEffect } from "react";
import { getPostComments } from "../services/comments.js";
import Modal from "react-modal";

const CommentModal = ({ isOpen, onRequestClose, post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const commentsData = await getPostComments(post.id);
    setComments(commentsData);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comment Modal"
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black opacity-80"
    >
      <div className="bg-white rounded-lg p-6">
        {/* Add your comment section content here */}
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
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CommentModal;
