import {Component} from 'react'
import './App.css';
import Header from './components/header'
import CalorieBox from './components/calorieBox'
import data from "./data/items";


class App extends Component {
    render() {
        return (
                <div className='App'>
                    <Header/>
                    <div className='container'>
                        {data.map((item, id) => {
                            return (
                                <CalorieBox key={id} props={item}/>
                            );
                        })
                        }
                    </div>
                </div>
        );
    }
}

export default App;
