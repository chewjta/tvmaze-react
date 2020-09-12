import React from 'react';

const Sort = ({onChange, selected}) => {
    return (
        <div class="text-primary text-center">
            Filter By:
            <select onChange={onChange} value={selected} class="custom-select" style={{margin:'10px auto', maxWidth:'900px'}}>
            <option value="name">Name </option>
            <option value="score">Best Match</option>
            <option value="rating asc">Rating ASC</option>
            <option value="rating desc">Rating DESC</option>
            </select>
        </div>
        )
}

export default Sort