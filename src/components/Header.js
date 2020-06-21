import React from 'react';

function Header() {
    return (
        <header style={{ backgroundColor: 'red'}}>
           <h1 style={ header.h1 }>Employee Directory</h1> 
           <p style={ header.p }>Pick a name</p>
        </header>
    )
}

const header = {
    backgroundColor: 'green',
    h1: {
    textAlign: 'center'
    },
    p: {
        textAlign: 'right'
    },
};

export default Header();