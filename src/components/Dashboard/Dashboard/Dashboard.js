import React from 'react';
import User from '../User/User';
import Admin from '../Admin/Admin';

const Dashboard = () => {
    return (
        <section className="container">
                <Admin></Admin>
                {/* <User></User> */}
        </section>
    );
};

export default Dashboard;