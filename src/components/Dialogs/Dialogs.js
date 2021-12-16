import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}
                     className={({isActive}) => isActive ? classes.active : classes.dialogsItems}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Dasha"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra"},
        {id: 3, message: "Yo"},
        {id: 4, message: "WIe geht's bro"}
    ]

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map(message => <Message message={message.message} id={message.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}