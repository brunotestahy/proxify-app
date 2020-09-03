import React from 'react';
import '../App/App.scss';
import Header from '../Header/Header';

function Favourites() {
    const title = 'Favourites';

    return (
        <div className='page-layout'>
            <Header title={title}/>
            <div className='container-fluid'>
                <h2>{title} page</h2>
            </div>
        </div>
    );
}

export default Favourites;
