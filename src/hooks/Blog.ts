import { useEffect, useState } from "react";
import Blog from "../types/Blog";
import axios from "../utils/axiosInstance";

const useBlog = (id: string) => {
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        setError("");
        axios.get(`/blog/get/${id}`)
            .then((res) => {
                setBlog(res.data.blog);
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                if (err.response) {
                    setError(err.response.data.message);
                } else {
                    setError("Something went wrong!");
                }
            })
    }, [id]);


    return { blog, loading, error };
}

export default useBlog;