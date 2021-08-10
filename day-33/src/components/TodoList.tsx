import React from 'react';

interface ITodoListProps {
    title: string,
    done: boolean,
    index: string
}

const MyComponent = ({title, done, index}: ITodoListProps) => {

    return (
        <h2>{title}<button>Del</button></h2>
    );
};

export default MyComponent;
