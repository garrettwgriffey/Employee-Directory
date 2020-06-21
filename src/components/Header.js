import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
           <h1>Employee Directory</h1> 
           <p>Pick a name</p>
        </header>
    );
}

const headerStyle = {
    backgroundColor: 'green',
    textAlign: 'center'
};

export default Header;