import React, {useState} from 'react';
import Header from '../Header/Header';
import '../App/App.scss';

function Orders() {
    const title = 'Orders';
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

export default Orders;
