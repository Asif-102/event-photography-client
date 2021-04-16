import React, { useContext, useEffect, useState } from 'react';
import User from '../User/User';
import Admin from '../Admin/Admin';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    
    const [admin, setAdmin] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/admin?email=${email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[email])

    return (
        <section className="container">
                {
                    admin.length > 0 && <Admin></Admin>
                }
                {
                    admin.length == 0 && <User></User>
                }
        </section>
    );
};

export default Dashboard;