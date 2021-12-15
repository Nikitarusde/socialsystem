import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) => isActive ? classes.active : classes.dialogsItems}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Nikita" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Dasha" id="4"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}