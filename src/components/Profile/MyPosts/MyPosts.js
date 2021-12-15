import classes from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {

    let postsData = [
        {id: 1, post: "Hi how are you?", likesCount: 5},
        {id: 2, post: "It is my first post", likesCount: 23},
    ]

    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Posts massage={postsData[0].post} id={postsData[0].id} likesCount={postsData[0].likesCount}/>
                <Posts massage={postsData[1].post} id={postsData[1].id} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}