import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

function AppContextProvider({children}){
    const [page, setPage] = useState(1);
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const  [totalPages, setTotalPages] = useState(null);

    // data filling pending
    async function fatchBlogPosts(page = 1 , tag = null, category){

        setLoading(true);
        let Url = `${baseUrl}?page=${page}`;
        if(tag){
            Url+= `&tag=${tag}`;
        }
        if(category){
            Url += `&category=${category}`;
        }
        try{
            const result = await fetch(Url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch{
            console.log("this is a error in fetching data");
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlePage(page){
        setPage(page);
        fatchBlogPosts(page)
    }


    const value = {
        page,
        setPage,
        loading,
        setLoading,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        handlePage,
        fatchBlogPosts
    };

    return <AppContext.Provider  value = {value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;