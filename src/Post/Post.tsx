import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import './Post.css';

async function getJson(url: string) {
    const res = await fetch(url);
    return res.json();
};

function Post({post}: {post: IPost}){
    const [numLikes, addLike] = useState(0);
    // debugger
    return <div id="Post">
    <h2><Link to={`/posts/${post?.id}`}>{post.title}</Link></h2>
    <div id="Photo">
        <img src="/123.jpg" alt="your image" />
    </div>
    <div id='LikesAndDescription'>
        <p>Num likes {numLikes}</p>
        <Like onLike={ () => addLike(numLikes + 1) }>
            <span>Like</span>
        </Like>
    </div>
  </div>
};

 function PostContainer() {
    const [dynamicPost, setDynamicPost] = useState({title:'', id:''});
    const params = useParams();
    useEffect(() => {
        async function setDynamicData() {
            setDynamicPost(await getJson(`./data/post.${params.postId}.json`))            
        }
        setDynamicData();

    }, [params.postId]);
    return <Post post={dynamicPost}></Post>
};

interface IPost {
    id: string;
    title: string;
    photo?: string;
};


interface IPropsLike{
    onLike: () => void;
    children: JSX.Element;
}

function Like({onLike, children}: IPropsLike){
    return <button onClick={onLike}>Like</button>
};

export {PostContainer, Post};