import React from 'react';
import Logo from './gambar/Us_1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="menu-logo-wrapper">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="Logo UMN" className="d-inline-block align-text-top" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="watched.js">Most Watched</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="genre.js">Genre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.js">About Us</a>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Cari..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
