import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Book = () => {
    let { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;

    const [serviceFind, setServiceFind] = useState({});
    const { title, price } = serviceFind;

    const [bookService, setBookService] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/getService?_id=${id}`)
            .then(res => res.json())
            .then(data => setServiceFind(data[0]))
    }, [id])

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        setBookService(data);
    }

    const handlePaymentSuccess = paymentId =>{
        console.log(paymentId);
    }

    return (
        <main className="row">
            <div style={{display: bookService ? 'none': 'block'}} className="col-6">
                <form style={{ maxWidth: '570px' }} onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" defaultValue={name} ref={register({ required: true })} />
                    {errors.name && <span className="text-danger"><small>Name is required</small></span>}

                    <input type="email" name="email" placeholder="Your email address" className="form-control" defaultValue={email} ref={register({ required: true })} />
                    {errors.email && <span className="text-danger"><small>Email is required</small></span>}

                    <input type="text" name="service" placeholder="Service Title" className="form-control" defaultValue={title} ref={register({ required: true })} />
                    {errors.service && <span className="text-danger"><small>Service is required</small></span>}<br></br>

                    <h5>Your Service charged will be <span className="text-primary">${price}</span></h5> <br />
                    <input type="submit" className="btn btn-primary px-4 py-2" value="Submit" />
                </form>
            </div>
            <div style={{display: bookService ? 'block': 'none'}} className="col-6">
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </main>
    );
};

export default Book;