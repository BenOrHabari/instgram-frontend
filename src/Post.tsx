import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

async function getJson(url: string) {
    const res = await fetch(url);
    return res.json();
};

export default function Post({post}: {post?: IPost}) {
    const [numLikes, addLike] = useState(0);
    const [dynamicPost, setDynamicPost] = useState({title:'', id:''});
    const params = useParams();
    useEffect(() => {
        async function setDynamicData() {
            setDynamicPost(await getJson(`./data/posts.${params.postId}.json`))            
        }

        if(!post){
            setDynamicData();
        };
    }, [post, params.postId])
    return <div>
      <h2><Link to={`/posts/${post?.id}`}>{post?.title || dynamicPost?.title}</Link></h2>
      <p>Num likes {numLikes}</p>
      <Like onLike={ () => addLike(numLikes + 1) }>
        <span>Like</span>
      </Like>
    </div>
};

interface IPost {
    id: string;
    title: string;
}
  

interface IPropsLike{
    onLike: () => void;
    children: JSX.Element;
}

function Like({onLike, children}: IPropsLike){
    return <button onClick={onLike}>Like</button>
}