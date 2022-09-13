import React, {useEffect, useState} from "react";

async function getJson(url: string) {
    const res = await fetch(url);
    return res.json();
};

export default function Post({post}: {post?: IPost}) {
    const [numLikes, addLike] = useState(0);
    const [dynamicPost, setDynamicPost] = useState({title:'', id:''});
    useEffect(() => {
        async function setDynamicData() {
            setDynamicPost(await getJson(`./data/posts.123.json`))            
        }

        if(!post){
            setDynamicData();
        };
    }, [post])
    return <div>
      <h2>{post?.title || dynamicPost?.title}</h2>
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