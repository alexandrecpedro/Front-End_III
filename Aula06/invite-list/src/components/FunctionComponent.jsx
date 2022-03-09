import React from 'react';

const functionComponent = (props) => {
    const { nome, tarefa } = props;
    return (
        <li>{nome} trará {tarefa}</li>
    );
};

export default functionComponent;