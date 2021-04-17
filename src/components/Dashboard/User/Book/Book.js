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
    const { title, price, image } = serviceFind;

    const [visible, setVisible] = useState([])

    const [bookService, setBookService] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/getService?_id=${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceFind(data[0])
                setVisible(data)
            })
    }, [id])

    const { register, reset } = useForm();

    const handlePaymentSuccess = paymentId => {
        const bookingData = {
            userName:name,
            userEmail:email,
            serviceTitle:title,
            serviceImg:image,
            serviceCost:price,
            payId:paymentId,
            bookingState:'Pending'
        }
        const url  = `http://localhost:5000/addBooking`;

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(bookingData)
        })
        .then(response =>{
            if(response.ok){
                alert('booking successfull');
            }
        })
    }

    return (
        <main>
            <div style={{display: visible.length == 0 ? 'block':'none'}}>
                <h2>Please Select a Service from Service Section for booking</h2>
            </div>
            <div style={{display: visible.length == 0 ? 'none':'block'}}>
                <div style={{ display: bookService ? 'none' : 'block' }} className="col-6">
                    <form style={{ maxWidth: '570px' }}>

                        <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" defaultValue={name} ref={register({ required: true })} disabled/>

                        <input type="email" name="email" placeholder="Your email address" className="form-control" defaultValue={email} ref={register({ required: true })} disabled/>
                        
                        <input type="text" name="service" placeholder="Service Title" className="form-control" defaultValue={title} ref={register({ required: true })} disabled/>
                        <br></br>

                        <h5>Your Service charged will be <span className="text-primary">${price}</span></h5> <br />
                    </form>
                </div>
                <div className="col-6">
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </main>
    );
};

export default Book;