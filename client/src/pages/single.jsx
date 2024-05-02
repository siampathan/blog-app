import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/menu";
import { AuthContext } from "../context/authContext";
import { API_BASE } from "../components/api/api";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/post/${postId}`);
        setPost(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE}/post/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
    console.log("Deleted Button Clicked");
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="image" />

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="user" />}

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete" />
            </div>
          )}
        </div>

        <h1>{post.title}</h1>

        <p>{post.des}</p>
      </div>

      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
