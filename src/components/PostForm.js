import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        className="border p-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
      ></textarea>
      <button type="submit" className="p-2 bg-blue-500 text-white mt-2">
        Submit Post
      </button>
    </form>
  );
};

export default PostForm;
