import React from 'react';
import FA from 'react-fontawesome';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
            <a className="navbar-brand">CRUD - React, Redux</a>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav w-100 justify-content-end">
                    <li className="nav-item active">
                        <a className="nav-link btn btn-light text-dark" href="/productos/nuevo"><FA name="plus-circle" className="mr-2" />Agregar producto <span className="sr-only">(current)</span></a>
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
