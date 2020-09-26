import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Header bg-purple">
            <div className="Header-item">
                <Link to="/" className="Header-link f4 d-flex flex-items-center">
                    <span>A blog</span>
                </Link>
            </div>

            <div className="Header-item">
                <Link to="/" className="Header-link">
                    Index
                </Link>
            </div>
            <div className="Header-item">
                <Link to="/show" className="Header-link">
                    Single
                </Link>
            </div>
            <div className="Header-item">
                <input type="search" className="form-control input-dark" />
            </div>
        </div>
    );
}

export default Navbar;
