import React from 'react';
import FA from 'react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link to={ '/' } className="navbar-brand" href="#">CRUD - React, Redux</Link>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav w-100 justify-content-end">
                    <li className="nav-item active">
                        <Link to={ '/productos/nuevo' } className="nav-link btn btn-light text-dark"><FA name="plus-circle" className="mr-2" />Agregar producto <span className="sr-only">(current)</span></Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Item 2</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header
