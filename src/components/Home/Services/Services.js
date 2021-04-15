import React from 'react';
import weeding from '../../../images/weeding.jpg';
import product from '../../../images/product.jpg';
import birthday from '../../../images/birthday.jpg';
import Service from './Service/Service';

const services = [
    {
        id:1,
        img:weeding,
        title:'Weeding Photography',
    },
    {
        id:2,
        img:product,
        title:'Product Photography',
    },
    {
        id:3,
        img:birthday,
        title:'Birthday Photography',
    }
]

const Services = () => {
    return (
        <section className="container my-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Our Awesome Services</h1>
            <div className="row justify-content-center align-items-center">
                {/* <div>Loading....</div> */}
                {
                    services.map(service => <Service key={Service.id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;