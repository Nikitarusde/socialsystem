import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}
                     className={({isActive}) => isActive ? classes.active : classes.dialogsItems}>
                {props.name}
            </NavLink>
        </div>
    )
}

