const BlogCardSkeleton = () => {
    return (
      <div className="p-4 border-b-2 border-gray-200 animate-pulse">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="h-4 bg-gray-300 rounded w-24" />
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <div className="h-4 bg-gray-300 rounded w-20" />
        </div>
  
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-11/12" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
        </div>
  
        <div className="flex justify-between items-center mt-4">
          <div className="h-6 w-20 bg-gray-300 rounded-full" />
          <div className="h-6 w-6 bg-gray-300 rounded-full" />
        </div>
      </div>
    );
  };

export default BlogCardSkeleton;