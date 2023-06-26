import React, { useState, useEffect } from 'react';

const PostTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0'
        );
        const data = await response.json();
        setPosts(data.hits);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <table width="100%" frame='box' rules="all" padding ={10}>
      <thead >
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>Created At</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.objectID}>
            <td>{post.title}</td>
            <td>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.url}
              </a>
            </td>
            <td>{post.created_at}</td>
            <td>{post.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;