import React from 'react';

interface ITodoListProps {
    title: string,
    done: boolean,
}

const MyComponent = ({title, done}: ITodoListProps) => {

    return (
        <h2>{title}<button>Del</button></h2>
    );
};

export default MyComponent;
