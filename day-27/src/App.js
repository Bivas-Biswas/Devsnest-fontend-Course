import './App.css';
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AddTodo/>
                <ListTodo/>
            </div>
        </Provider>
    );
}

export default App;
