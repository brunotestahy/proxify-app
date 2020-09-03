import React, {useState} from 'react';
import '../App/App.scss';
import Header from '../Header/Header';

function Favourites() {
    const title = 'Favourites';
    const [expandedMenuClass, setExpandedMenuClass] = useState('');

    return (
        <div className={`page-layout ${expandedMenuClass}`}>
            <Header title={title}
                    expandedMenuClass={expandedMenuClass}
                    setExpandedMenuClass={setExpandedMenuClass}/>
            <div className='container-fluid'>
                <h2>{title} page</h2>
            </div>
        </div>
    );
}

export default Favourites;
