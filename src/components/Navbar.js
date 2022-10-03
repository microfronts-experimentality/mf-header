import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Searchbar } from './SearchBar';
import { getProductsByKeyword, setProducts } from '@microfronts/api';



export const Navbar = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        keyword: '',
        products: [],
        loggedIn: false,
    });

    useEffect(() => {
        getProductsByKeyword(data.keyword)
            .then(({ results }) => {
                setData({ ...data, products: results });
                setProducts(results);
                navigate("/");
            });
    }, [data.keyword]);

    const searchHandler = (keyword) => {
        setData({ ...data, keyword });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">
                    Store
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            home
                        </li>
                        <li className="nav-item">
                            otro
                        </li>
                    </ul>
                    <Searchbar query={data.keyword} searchHandler={searchHandler} />
                </div>
            </div>
        </nav>
    )
}