import { useEffect} from "react";
import AppBar from "../components/Appbar";
import BlogCard from "../components/BlogCard"
import useBlogs from "../hooks/bulk"
import BlogsSkeleton from "../skeletons/BlogsSkeleton";
import { useNavigate } from "react-router-dom";


const Blogs = () => {

  const {blogs, loading, error} = useBlogs();
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      navigate('/signin');
    } 
  }, []);

  if(error)
    return <div className="w-[48%] mx-auto">{error}</div>

  

  return (
    <>
    <AppBar   />

    {loading ? <BlogsSkeleton className="w-[55%] mx-auto"/> : (
      <div className="w-[55%] mx-auto">

      {blogs.map((blog) => (
        <BlogCard  key={blog.id} id={blog.id} title={blog.title} content={blog.content} author={blog.author.name} createdAt={blog.createdAt} />
      ))}
    </div>
    )}
    
    </>
  )
}

export default Blogs



