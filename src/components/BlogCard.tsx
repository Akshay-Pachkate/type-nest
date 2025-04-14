import { Link } from "react-router-dom";
import { getDateInReqFormat } from "../utils/utils"
import Avatar from "./Avatar"
import { BsThreeDots } from "react-icons/bs";

interface BlogCardProps {
    author: string,
    title: string,
    content: string,
    createdAt: Date,
    id: string
}

const BlogCard = ({author, title, content, createdAt, id}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="p-4 ">
      <div className="flex gap-3 items-center" >
        <Avatar size="small" name={author} />
        <h2 className="font-semibold text-gray-700" >{author}</h2>
        <div className="h-2 w-2 rounded-full bg-gray-300" ></div>
        <h3 className="text-gray-500" >{getDateInReqFormat(new Date(createdAt), 'short')}</h3>
      </div>
        <div className="flex flex-col gap-2 mt-4" >
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-500">{content.length > 200 ? (content.slice(0, 196) + '...'): content}</p>
        </div>

        <div className="flex justify-between items-center" >
            <div className="text-sm font-semibold text-gray-500 bg-gray-100 rounded-full px-2 py-1 mt-4" >
                {Math.ceil(content.length / 200)} min read
            </div>
            <div className="cursor-pointer hover:bg-gray-200 hover:rounded-full p-2" >
                <BsThreeDots/>
            </div>
        </div>
        <div className="w-full mt-3 h-[1px] bg-gray-200" ></div>
    </Link>
  )
}

export default BlogCard
