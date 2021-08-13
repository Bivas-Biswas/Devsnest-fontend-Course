import React, { useState } from 'react';
import { IPostType } from "../App";

const Post = ({ post }: { post: IPostType }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <div className="card post">
            <div className="card-header">
                <div className="card-sub-header">
                    <div className='card-img'>
                        <img src="" alt=""/>
                    </div>
                    <h5 className="card-tittle">{post.username}</h5>

                </div>
                <i className="bi bi-three-dots"/>
            </div>
            <img src={post.post} className="card-img-top" alt="..."/>
            <div className="buttons">
                <i
                    className={!isLiked ? "bi bi-heart" : "bi bi-heart-fill liked"}
                    onClick={() => {
                        setIsLiked(!isLiked)
                    }}
                />
                <i className="bi bi-chat"/>
                <i className="bi bi-share"/>
            </div>
        </div>
    );
};

export default Post;
