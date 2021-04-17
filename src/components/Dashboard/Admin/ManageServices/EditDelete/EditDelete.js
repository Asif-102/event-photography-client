import React, { useState } from 'react';

const EditDelete = ({manage}) => {

    const {_id, title, price} = manage;

    const [display, setDisplay] = useState('');

    const deleteService = id =>{
        const url = `https://event-photography-company.herokuapp.com/deleteService/${id}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => setDisplay('none'))
    }


    return (
        <tr style={{display:display}}>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger" onClick={()=>deleteService(_id)}>Delete</button>
            </td>
        </tr>
    )
};

export default EditDelete;