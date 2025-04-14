import { useEffect, useState } from "react";
import Blog from "../types/Blog";
import axios from "../utils/axiosInstance";

const useBlogs = (page: number=1, limit: number=10) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        setError("");
        axios.get(`/blog/bulk?page=${page}&limit=${limit}`)
            .then((res) => {
                setBlogs(res.data.blogs);
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                if (err.response) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            })
    }, [page, limit]);


    return { blogs, loading, error };
}


export default useBlogs;