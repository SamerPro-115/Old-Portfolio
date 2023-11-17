import React from 'react';
import {Navbar} from 'react-bootstrap'

const DarkMood = (props) => {
    
    return (
        <Navbar.Brand className='animate__animated animate__backInDown' href='#' onClick={props.onClick} clicked={props.clicked}>
          {props.children}
        </Navbar.Brand>
    )
}


export default DarkMood;