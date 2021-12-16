import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}
                     className={({isActive}) => isActive ? classes.active : classes.dialogsItems}>
                <img className={classes.avatar} src='https://www.w3schools.com/howto/img_avatar2.png'/>
                {props.name}
            </NavLink>
        </div>
    )
}

