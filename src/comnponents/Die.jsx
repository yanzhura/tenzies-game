import React from 'react';

const Die = ({ value, isHeld, holdDice }) => {
    const dieStyle = isHeld ? 'die die--held' : 'die';
    return (
        <div className={dieStyle} onClick={holdDice}>
            {value}
        </div>
    );
};

export default Die;
