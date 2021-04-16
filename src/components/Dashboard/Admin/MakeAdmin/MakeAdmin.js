import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth:'570px'}}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="john@gmail.com" ref={register({required:true})} className="form-control"/>
                {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                <br></br>
                <input type="submit" className="btn btn-primary px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default MakeAdmin;