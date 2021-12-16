import classes from './MyPosts.module.css'
import {Posts} from "./Post/Posts";

export const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Posts massage={p.post} id={p.id} likesCount={p.likesCount}/>);

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
                {postsElements}
            </div>
        </div>
    );
}