import React from 'react';

const Titulo = (props) => {
    const style = {
        color: props.textColor,
        backgroundColor: 'yellow'
    };

    return (
        <h1 style={style}>
            Meu site lindo: {props.children}
        </h1>
    );
    
};

export default Titulo;
