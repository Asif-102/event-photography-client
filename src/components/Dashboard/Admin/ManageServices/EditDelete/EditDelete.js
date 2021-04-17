import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const EditDelete = ({ manage }) => {
    const { _id, title, price } = manage;

    const { register, handleSubmit, watch, errors } = useForm();

    const [success, setSuccess] = useState('');

    const onSubmit = data => {
        const serviceUpdate = {
            title:data.title,
            price:data.price,
            id:_id
        }
        manage.price = data.price;
        manage.title = data.title;
        
        // console.log(serviceUpdate)

        fetch(`https://event-photography-company.herokuapp.com/deleteService/${_id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(serviceUpdate)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        setUpdateDisplay('none')
        setSuccess('Updated Successfull')
    }

    const [display, setDisplay] = useState('');

    const [updateDisplay, setUpdateDisplay] = useState('none');
    const handleEdit = ()=>{
        setUpdateDisplay('')
        setSuccess('')
    }

    const deleteService = id => {
        const url = `https://event-photography-company.herokuapp.com/deleteService/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => setDisplay('none'))
    }


    return (
        <tr style={{ display: display }}>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-warning" onClick={()=>handleEdit()}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteService(_id)}>Delete</button>
            </td>
            <div style={{display:updateDisplay}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="title" defaultValue={title} ref={register({ required: true })} />
                    {errors.example && <span>This field is required</span>}
                    <input name="price" defaultValue={price} ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br/>
                    <input type="submit" value="update" className="btn btn-primary"/>
                </form>
            </div>
            <p style={{color:'green'}}>{success}</p>
        </tr>
    )
};

export default EditDelete;