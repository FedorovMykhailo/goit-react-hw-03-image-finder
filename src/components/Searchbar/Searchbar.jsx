import React, { Component } from "react";

class Searchbar extends Component {

    render() {

        const {submit} = this.props
        return <>
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={submit}>
                <button type="submit" className="SearchForm-button" >
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            </header>
            </>
    }

}

export default Searchbar