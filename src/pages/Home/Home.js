import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios"
import Pagination from "../../components/pagination/pagination";
import Posts from "../../components/posts/posts";
import Header from "../../components/header/Header"

function Home () {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
   
            useEffect(() => {
                fetch("https://blog-siteuz.herokuapp.com/posts",)
                .then(response => response.json())
                .then(data => setPosts(data))
            }, [])
            useEffect(() => {
                const fetchPosts = async () => {
                  setLoading(true);
                  const res = await axios.get('https://blog-siteuz.herokuapp.com/posts');
                  setPosts(res.data);
                  setLoading(false);
                };
            
                fetchPosts();
              }, []);
        
              
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
                return(
                    <>
                     <Header />

             <div className='container mt-5'>
                    <h1 className='text-primary mb-3'> Blogs</h1>
                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                    </div>
                    </>
                )
         
}

export default Home