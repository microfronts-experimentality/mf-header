import React, { useState } from "react";

export const Searchbar = () => {

    const [keyword, setKeyword] = useState('Hola');

    const submitHandler = (e) => {
        e.preventDefault();
        alert('keyword: ' + keyword);
        setKeyword('');
    }

    const keywordHandler = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <form className="d-flex" onSubmit={submitHandler}>
            <input
                value={keyword}
                onChange={keywordHandler}
                className="form-control me-2"
                type="text"
                placeholder="Buscar"
                aria-label="Search"
            />
            <button className="btn btn-light" type="submit" onClick={submitHandler}>
                Buscar
            </button>
        </form>
    )
}