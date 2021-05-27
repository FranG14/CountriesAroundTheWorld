import React, { useState } from 'react'
import '../../countryList.css'

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    }
    return (
        <div className="searchBar">
            <input
                type="text"
                className='searchInput'
                width='250'
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    )
}

export default Search;
