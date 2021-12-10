import classes from './Posts.module.css'

export const Posts = () => {
    return (
        <div className={classes.item}>
            <img src='https://www.w3schools.com/howto/img_avatar2.png'/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}