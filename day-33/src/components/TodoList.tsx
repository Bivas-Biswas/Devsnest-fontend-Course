import React from 'react';

interface ITodoListProps {
    title: string,
    done: boolean,
    index: number,
    handleDelete: (id:number) => void
}

const MyComponent = ({title, done, index,handleDelete}: ITodoListProps) => {

    return (
        <div className='todos-items'>
            <h2>{title}</h2>
            <button onClick={()=> handleDelete(index)}>Del</button>
        </div>
    );
};

export default MyComponent;
