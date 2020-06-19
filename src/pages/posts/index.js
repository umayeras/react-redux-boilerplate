import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, createPost } from "../../actions/postsActions";
import Loader from "../../components/Loader";
import Alert from "../../components/Alert";

const Index = () => {
  const { error, loading, data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <button onClick={createPost()}>Create</button>
      <h2>Post List</h2>
      {error && <Alert />}
      {loading && <Loader />}
      <ul>
        {data &&
          data.length > 0 &&
          data.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default Index;
