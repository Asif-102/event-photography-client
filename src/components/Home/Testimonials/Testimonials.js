import React from 'react';
import user from '../../../images/user.svg';
import Testimonial from './Testimonial/Testimonial';

const testimonials = [
    {
        id:1,
        img:user,
        name:'karim',
        designation: 'CEO, abc',
        review : 'very dedicated and passionate'
    },
    {
        id:2,
        img:user,
        name:'Rafiq',
        designation: 'MD, kdf',
        review : 'very good'
    },
    {
        id:3,
        img:user,
        name:'Jamal',
        designation: 'Manager, bata',
        review : 'awesome'
    }
]

const Testimonials = () => {
    return (
        <section className="container py-5 mb-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Clients Feedback</h1>
            <div className="row justify-content-between pt-4">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial.id}
                    testimonial={testimonial}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;