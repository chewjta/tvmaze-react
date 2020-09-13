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

            // button needs to have the value from the props because this is the value of the e.target.value when the button is clicked. for clarity sake, the button is the target, the click is now the event and the value is the value of this button.

export default Search


