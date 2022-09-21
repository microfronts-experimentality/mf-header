import React, { useState } from "react";

export const Searchbar = ({ query, searchHandler }) => {

    const [keyword, setKeyword] = useState(query);

    const submitHandler = (e) => {
        e.preventDefault();
        searchHandler(keyword);
        setKeyword(keyword);
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