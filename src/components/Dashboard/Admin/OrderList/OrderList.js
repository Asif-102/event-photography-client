import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const OrderList = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch('https://event-photography-company.herokuapp.com/allBooking')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name and<br />Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(orders =>
                                <tr>
                                    <td>{orders.userName}<br />{orders.userEmail}</td>
                                    <td>{orders.serviceTitle}</td>
                                    <td>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <select name="status" ref={register}>
                                                <option value="Pending">Pending</option>
                                                <option value="Done">Done</option>
                                            </select>
                                            <input type="submit" />
                                        </form>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;