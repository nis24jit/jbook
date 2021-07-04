import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import {Provider} from "react-redux";
import {store} from "./state";
import CellList from "./components/cell-list";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
    return (
        <Provider store={store}>
            <div>
                <CellList/>
            </div>
        </Provider>

    );
};


export default App;
