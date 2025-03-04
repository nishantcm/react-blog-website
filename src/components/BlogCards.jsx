import React from 'react'
import { Link } from 'react-router-dom';

const BlogCards = ({blogs}) => {
  const filteredBlogs = blogs;
  console.log(filteredBlogs)
  return (
    <div>
      {
        filteredBlogs.map((blog) => <Link key={blog.id}>
          <div>
            <img src={blog.image} alt="" className="w-full" />
          </div>
          <h3 class="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
          <p className="mb-2">{blog.author}</p>
        </Link>)
      }
    </div>
  )
}

export default BlogCards