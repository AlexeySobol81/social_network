import DialogsContainer from "./Dialogs/DialogsContainer";
import {InitialDialogPageStateType} from "../../redux/dialogsReucer";
import {ActionsTypes} from "../../redux/reduxStore";

type DialogPagePropsType = {
    state: InitialDialogPageStateType
    dispatch: (action: ActionsTypes) => void
}

const DialogPage = (props: DialogPagePropsType) => {
    return(
        <div>
            <DialogsContainer
                newMessageText={props.state.newMessageText}
                dispatch={props.dispatch}
                dialogs={props.state.dialogs}
                messages={props.state.messages}
            />
        </div>
    )
}

export default DialogPage