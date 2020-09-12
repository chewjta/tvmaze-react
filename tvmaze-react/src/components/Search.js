import React from 'react';



const Search = ({value,onChange,onClick}) => {
    return(
        <section className="searchbox-wrap">
            <input
            type="text"
            className="searchbox"
            placeholder="Search for a movie..."
            onChange={onChange}
            value={value}
            />
            <button className="btn btn-primary text-center" value={value} onClick={onClick} style={{margin:'10px auto'}}>Search</button>
        </section>
        )
}

export default Search


