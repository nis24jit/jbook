import {useActions} from "../hooks/use-actions";

interface ActionBarButtonsProps {
    classOfButton: string;
    typeOfAction: string,
    id: string,
}

const ActionBarButtons: React.FC<ActionBarButtonsProps> = ({classOfButton, typeOfAction, id}) => {
    const {moveCell, deleteCell} = useActions();

    if (typeOfAction === 'up') {
        return (

                <button className="button is-primary is-small" onClick={() => moveCell(id, 'up')}>
                    <span className="icon"><i className={classOfButton}></i></span>
                </button>

        );
    } else if (typeOfAction === 'down') {
        return (

                <button className="button is-primary is-small" onClick={() => moveCell(id, 'down')}>
                    <span className="icon"><i className={classOfButton}></i></span>
                </button>

        );
    }
    return (

            <button className="button is-primary is-small" onClick={() => deleteCell(id)}>
                <span className="icon"><i className={classOfButton}></i></span>
            </button>

    );
};

export default ActionBarButtons;
