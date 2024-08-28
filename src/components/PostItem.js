import React, { useState } from 'react';
import ReplyForm from './ReplyForm';

const PostItem = ({ post }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplySubmit = (reply) => {
    // Handle the reply submission
    console.log('Reply:', reply);
  };

  return (
    <div className="p-4 border-b">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className="p-2 bg-gray-500 text-white mt-2"
      >
        Reply
      </button>
      {showReplyForm && <ReplyForm onSubmit={handleReplySubmit} />}
    </div>
  );
};

export default PostItem;
