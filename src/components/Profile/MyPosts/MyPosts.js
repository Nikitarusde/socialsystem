import classes from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                New posts
            </div>

            <div className={classes.posts}>
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    );
}