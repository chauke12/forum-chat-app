import React, { useState } from 'react';

const ReplyForm = ({ onSubmit }) => {
  const [reply, setReply] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reply);
    setReply('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        className="border p-2 w-full"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write a reply..."
      ></textarea>
      <button type="submit" className="p-2 bg-blue-500 text-white mt-2">
        Submit Reply
      </button>
    </form>
  );
};

export default ReplyForm;
