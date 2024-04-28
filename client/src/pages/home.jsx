import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../components/api/api";

const Home = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     title: " Lorem Ipsum has been the industry's standard dummy",
  //     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  //     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     title: " Lorem Ipsum has been the industry's standard dummy",
  //     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  //     img: "https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     title: " Lorem Ipsum has been the industry's standard dummy",
  //     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  //     img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 4,
  //     title: " Lorem Ipsum has been the industry's standard dummy",
  //     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  //     img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/post${cat}`);
        setPosts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="image" />
            </div>

            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1> {post.title} </h1>
              </Link>
              <p> {post.des} </p>
              <button>Red More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
