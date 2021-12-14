import classes from "./Dialogs.module.css";

export const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    Nikita
                </div>
                <div className={classes.dialog}>
                    Alex
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Dasha
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>HI</div>
                <div className={classes.message}>How is your it-kamasutra</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}