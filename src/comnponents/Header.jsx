import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header--title">Tenzies</h1>
            <p className="header--desc">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
        </div>
    );
};

export default Header;
