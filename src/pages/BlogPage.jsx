import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import { baseUrl } from "../baseUrl";
import Header from "../component/Header";
import BlogDetails from "../component/BlogDetails";

const BlogPage = () =>{

    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fatchRelatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlog(data.relatedBlog);

        }
        catch(error){
            console.log("error agya h call m");
            setBlog(null);
            setRelatedBlog([]);

        };
        setLoading(false);
    }
    useEffect(()=> {
        if(blogId){
            fatchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div>
            <Header/>
            <div>
                <button onClick={() => navigation(-1)}> Back</button>
            </div>
            {
                loading ? <p>loading</p> :
                blog ? 
                (
                    <div>
                        <BlogDetails post={blog}/>
                        <h1>Related Blogs</h1>
                        {
                            relatedBlog.map((post)=>(
                                <div key={post.id}>
                                    <BlogDetails post={post}/>
                                </div>
                            ))
                        }
                    </div>
                ) : 
                (
                    <div>
                        <p>no blog found</p>
                    </div >
                )
            }
        </div>
    )
}

export default BlogPage;