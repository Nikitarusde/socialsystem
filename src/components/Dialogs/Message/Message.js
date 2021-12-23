import React from "react";
import classes from "./../Dialogs.module.css";



export const Message = (props) => {


    let newTextElement = React.createRef();

    let addMessage = () => {
        let text = newTextElement.current.value
        alert(text)
    }
    return (
        <div>
            <div className={classes.message}>
                {props.message}
            </div>
            <div>
                <div>
                    <textarea ref={newTextElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send a message</button>
                </div>
            </div>
        </div>
    )
}
