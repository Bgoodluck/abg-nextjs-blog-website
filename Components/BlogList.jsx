import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

function BlogList() {


    const [menu, setMenu] = useState('All');
    const [blogs, setBlogs] = useState([]);


    const fetchBlogs = async()=>{

      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs)
    }


    useEffect(()=>{
      fetchBlogs();
    }, [])


  return (
    <div>
       <div className=' flex justify-center gap-6 my-10'>
       <button 
  onClick={() => setMenu('All')} 
  className={`bg-black text-white py-1 px-4 rounded-sm ${menu === "All" ? "bg-opacity-75" : ""}`}>
  All
</button>
<button 
  onClick={() => setMenu('Technology')} 
  className={`bg-black text-white py-1 px-4 rounded-sm ${menu === "Technology" ? "bg-opacity-75" : ""}`}>
  Technology
</button>
<button 
  onClick={() => setMenu('Startup')} 
  className={`bg-black text-white py-1 px-4 rounded-sm ${menu === "Startup" ? "bg-opacity-75" : ""}`}>
  Startup
</button>
<button 
  onClick={() => setMenu('Lifestyle')} 
  className={`bg-black text-white py-1 px-4 rounded-sm ${menu === "Lifestyle" ? "bg-opacity-75" : ""}`}>
  Lifestyle
</button>

       </div>
       <div className=' flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
          {
            blogs.filter((item)=> menu ==="All"? true : item.category === menu).map((item, index)=>{
                return <BlogItem key={index}
                           id={item._id}
                           image={item.image}
                           title={item.title}
                           description={item.description}
                           category={item.category}
                        />
            })
          }
       </div>
    </div>
  )
}

export default BlogList
