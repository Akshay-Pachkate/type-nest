const BlogSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Main content skeleton */}
        <div className="flex-1">
          <div className="mb-8">
            <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>

        {/* Author section skeleton */}
        <aside className="md:w-48 flex md:flex-col md:items-start items-center border-b md:border-b-0 pb-8 md:pb-0">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="ml-4 md:ml-0 md:mt-4 space-y-2 w-full">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogSkeleton;
