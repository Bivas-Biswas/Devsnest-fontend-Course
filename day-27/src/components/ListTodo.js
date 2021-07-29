import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// import {connect} from "react-redux";
import { deletItem } from "../Redux";

function ListTodo(props) {

    const dispatch = useDispatch()
    const todos = useSelector((state => state.todo))
    // const todos = props.todo

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <div key={index}>
                        <h3 style={{ display: 'inline-block' }}> {todo.title} < /h3>
                        <button onClick={() => {
                            dispatch(deletItem(index))
                            // props.deletItem(index)
                        }}
                        >
                            Delete
                        </button>
                    </div>

                ))
            }

        </div>
    );
}


// without hooks

// const mapStateToProps = state =>{
//     return{
//         todo: state.todo
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return{
//         deletItem: (index)  => dispatch(deletItem(index))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);

export default ListTodo;