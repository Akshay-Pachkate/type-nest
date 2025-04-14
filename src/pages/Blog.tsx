import { getDateInReqFormat } from '../utils/utils';
import Avatar from '../components/Avatar';
import useBlog from '../hooks/Blog';
import { useParams } from 'react-router-dom';
import BlogSkeleton from '../skeletons/BlogSkeleton';
import Appbar from '../components/Appbar';

const Blog = () => {
  const {id} = useParams<{id: string}>();
  const {blog, loading} = useBlog(id || '');

  

  return (
    <>
    <Appbar />

    {loading ? <BlogSkeleton /> : (
      <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Main content - left side */}
        <article className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">
              {blog?.title}
            </h1>
            <time className="text-gray-500 text-sm">Posted on {getDateInReqFormat(new Date(blog?.createdAt || new Date()), 'long')}</time>
          </header>

          <div className="prose prose-lg text-gray-600 mb-8">
            {blog?.content.split('\n').map((line, index) => (
              <p key={index} className="mb-4">{line}</p>
            ))}
          </div>
        </article>

                {/* Author section - right side */}
        <aside className="md:w-48 flex md:flex-col md:items-start items-center border-b md:border-b-0 pb-8 md:pb-0">
          <Avatar size="big" name={blog?.author.name || 'U'} />
          <div className="ml-4 md:ml-0 md:mt-2">
            <h2 className="text-xl font-semibold text-black">{blog?.author.name}</h2>
            <p className="text-gray-500 text-sm">
              Master of mirth, purveyor of puns, and the funniest person in the kingdom.
            </p>
          </div>
        </aside>
      </div>
    </div>
    )}

    </>
  );
};

export default Blog;