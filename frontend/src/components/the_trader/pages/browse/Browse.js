import React from 'react';

import SearchBar from './SearchBar';
import BrowseList from './BrowseList';
import './Browse.css';

const Browse = (props) => {

    let current_option='brand';
    const changeOption = (option) => {
        current_option = option;
        console.log(current_option);
    }

    return (
        <div className="card" id="trader-browse-container">
            <h1 id="browse_heading" style={{margin:'30px'}}>Browse</h1>
            <SearchBar changeOption={changeOption}/>
            <BrowseList data={data}/>
        </div>

    ); 
}

let data = {
    item: {
        name: 'Coca-Cola',
        description: 'Coca-Cola tu, Shola Shola tu',
        brand: 'Musk-TWeets-Co.'
    },
    distribs: [
        {
            id:'distrib_id1',
            location:'27.200927,78.008363',
            name:'Raj Distributors',
            cost: 2000,
            carton: 50
        },
        {
            id:'distrib_id2',
            location:'27.189405,77.998812',
            name:'Hindustan Distributors',
            cost: 700,
            carton: 10
        }
    ]
}

export default Browse;