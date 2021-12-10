import classes from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                New posts
            </div>

            <div className={classes.posts}>
                <Posts massage='Hi how are you?'likesCount='5'/>
                <Posts massage='It is my first post' likesCount='23'/>
            </div>
        </div>
    );
}