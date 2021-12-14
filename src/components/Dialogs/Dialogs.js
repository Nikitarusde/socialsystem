import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div>
                    <NavLink to="/dialogs/1" className={({ isActive }) => isActive ? classes.active : classes.dialogsItems}>
                        Nikita
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2" className={({ isActive }) => isActive ? classes.active : classes.dialogsItems}>
                        Alex
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" className={({ isActive }) => isActive ? classes.active : classes.dialogsItems}>
                        Andrey
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/4" className={({ isActive }) => isActive ? classes.active : classes.dialogsItems}>
                        Dasha
                    </NavLink>
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