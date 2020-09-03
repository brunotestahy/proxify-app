import React from 'react';
import Header from '../Header/Header';
import '../App/App.scss';

function Orders() {
    const title = 'Orders';

    return (
        <div className='page-layout'>
            <Header title={title}/>
            <div className='container-fluid'>
                <h2>{title} page</h2>
            </div>
        </div>
    );
}

export default Orders;
