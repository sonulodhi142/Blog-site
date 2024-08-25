import React from "react";
import Header from "../component/Header";
import Blogs from "../component/Blogs";
import Pagination from "../component/Pagination";

const Home  = () =>{
    
    return(
        <div>
            <Header/>
            <div>
                <Blogs/>
                <Pagination/>
            </div>
        </div>
    )
}

export default Home;