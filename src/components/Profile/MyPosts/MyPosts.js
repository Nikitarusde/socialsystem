import React from "react";
import classes from './MyPosts.module.css'
import {Posts} from "./Post/Posts";


export const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Posts massage={p.post} id={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = " ";
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}