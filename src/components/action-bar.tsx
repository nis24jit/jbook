import ActionBarButtons from "./action-bar-buttons";
import './action-bar.css';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({id}) => {
    return (
        <div className="action-bar">
            <ActionBarButtons classOfButton="fas fa-arrow-up" typeOfAction="up" id = {id} />
            <ActionBarButtons classOfButton="fas fa-arrow-down" typeOfAction="down" id = {id} />
            <ActionBarButtons classOfButton="fas fa-times" typeOfAction="delete" id = {id} />
        </div>
    );
};

export default ActionBar;
