import classes from './Posts.module.css'

export const Posts = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.w3schools.com/howto/img_avatar2.png'/>
            {props.massage}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}