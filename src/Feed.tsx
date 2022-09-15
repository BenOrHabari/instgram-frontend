import React, {useEffect, useState} from "react";
import { Outlet } from "react-router-dom";
import Post from "./Post";

async function getJson(url: string) {
    const res = await fetch(url);
    return res.json();
};

export default function Feed() {
    const [posts, setPosts] = useState([{title: `Loading your feed`, id: ``}]);
    const [page, setPage] = useState(0);
    let [likedPostId, setLikePostId] = useState('')
    useEffect(() => {
      async function setData(){
        setPosts(await getJson(`./data/posts.json?page=${page}`));
      }
      setData();
    }, [page]);
  
    return <div>
      <ul>
        {posts.map((post, i) => <li key={i}>
          <Post post={post}></Post>
          </li>)}
      </ul>
      <p>
      <button onClick={() => setPage(page + 1)}>Page {page}</button>
      </p>
    </div>
  };