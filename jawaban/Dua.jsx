import { useReducer, useEffect } from "react";
import axios from "axios";

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

function reducer(state, action) {
  const { type, data } = action;
  switch (type) {
    case "INIT":
      return {
        ...state
      };
    case "MERGE_SUCCESS":
      return {
        isLoading: false,
        isError: false,
        data
      };
    default:
      break;
  }
}

export default function MergeData() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: []
  });

  useEffect(() => {
    dispatch({ type: "INIT" });
    async function getData() {
      const USERS = await axios.get(URL_USERS);
      const POSTS = await axios.get(URL_POSTS);
      const MERGE_DATA = reformData(USERS.data, POSTS.data);
      dispatch({ type: "MERGE_SUCCESS", data: MERGE_DATA });
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  if (!state.isError && !state.isLoading) {
    return (
      <React.Fragment>
        <h4>Hasil Nomor 2</h4>
        <span>{JSON.stringify(state.data)}</span>
      </React.Fragment>
    );
  } else return <span>Loading...</span>;
}

function reformData(USERS, POSTS) {
  const temp = [];
  USERS.map(user => {
    POSTS.map(post => {
      user.id === post.userId ? temp.push({ ...post, user: user }) : null;
    });
  });

  console.log(temp);
  return temp;
}
