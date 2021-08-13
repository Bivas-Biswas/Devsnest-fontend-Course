import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { IPostType } from "../App";
import Post from "./Post";

const Landing = ({ posts }: { posts: IPostType[] }) => {
    const user = useSelector((state: any) => state.user)
    const story = useRef<any>()

    useEffect(()=>{
        story.current.scrollBy({
            top: 0,
            left: 100,
            behavior: "smooth"
        })
    },[])

    return (
        <div className='container landing'>
            <div className="row">
                <div className="col-8">
                    <div className="story card" ref={story}>
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="story-img">
                                <img src={user.profilePicture} alt=""/>
                            </div>
                        ))}

                    </div>

                    <div className="posts">
                        { posts.length > 0? (
                            posts.map((post,index) =>(
                                <Post key={index} post={post} />
                            ))
                            ) : null
                        }
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
};

export default Landing;
