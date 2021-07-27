import './App.css';
import Froms from "./components/Froms";
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux</h1>
                <Froms/>
            </div>
        </Provider>

    );
}

export default App;
