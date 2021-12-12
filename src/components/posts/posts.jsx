import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
//   const [deletepost, setDeletePost] = useState([]) 
          const token = window.localStorage.getItem('token')
              const deletePosst = async()=> {
                  fetch("https://blog-siteuz.herokuapp.com/delete", {
                      method: "POST",
                      body: JSON.stringify(token),
                  }).then(res => res.json())
                  .then(data => console.log(data))
              };

  return (
    <ul className='list-group mb-4'>
      {posts.map(element => (
        <li key={element.post_id} className='list-group-item'>
          <br></br>
                                        <img src={`/public/${element.post_img}` } height="100" with="100"/>
                                        <h3 className="video-photographer">{element.post_title}</h3>
                                        <p>{element.post_text}</p>
                                        <button onSubmit={deletePosst}>Delete post</button>
                                       <form action="https://blog-siteuz.herokuapp.com/createpost" method="post">
                                       <input type="text" name="title" />
                                        <textarea name="text"></textarea>
                                        <button  type="submit">Comment</button>
                                       </form>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
