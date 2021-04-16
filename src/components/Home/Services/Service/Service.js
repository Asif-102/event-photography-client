import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {image,title,description} = service;
    return (
        <div className='col-md-4 service-card'>
            <div className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
                <img src={image} alt="" width="80px" height="100px"/>
                <h3 className='font-weight-bolder text-center mt-3 py-2'>{title}</h3>
                <p className='text-muted text-center my-2'>{description}</p>
            </div>
        </div>
    );
};

export default Service;