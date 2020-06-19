import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, deletePost, updatePost } from "../../actions/postsActions";
import Loader from "../../components/Loader";
import Alert from "../../components/Alert";

const Detail = () => {
  let { id } = useParams();
  const { error, loading, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      {error && <Alert />}
      {loading && <Loader />}
      {data && data !== {} && (
        <div>
          <button onClick={deletePost(data.id)}>Delete</button>
          <button onClick={updatePost(data.id)}>Update</button>
          <h1>{data.title}</h1>
        </div>
      )}
    </Fragment>
  );
};

export default Detail;
