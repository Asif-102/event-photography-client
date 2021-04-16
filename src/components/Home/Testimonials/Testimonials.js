import React, { useEffect, useState } from 'react';
import user from '../../../images/user.svg';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className="container py-5 mb-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Clients Feedback</h1>
            <div className="row justify-content-between pt-4">
                {
                    reviews.map(revew => <Testimonial key={revew._id}
                        revew={revew}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;