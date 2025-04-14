import BlogCardSkeleton from "./BlogCardSkeleton"

const BlogsSkeleton = ({className}: {className?:string}) => {
    return (<div className={className}>
        <BlogCardSkeleton/>
        <BlogCardSkeleton/>
        <BlogCardSkeleton/>
        </div>
    )
}

export default BlogsSkeleton