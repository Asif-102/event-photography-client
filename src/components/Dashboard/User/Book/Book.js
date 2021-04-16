import React from 'react';
import { useForm } from 'react-hook-form';

const Book = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <main>
            <form style={{ maxWidth: '570px' }} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" defaultValue="" ref={register({ required: true })} />
                {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                <input type="email" name="email" placeholder="Your email address" className="form-control" defaultValue="" ref={register({ required: true })} />
                {errors.email && <span className="text-danger"><small>Email is required</small></span>}
                <input type="text" name="service" placeholder="Graphic Design" className="form-control" defaultValue="" ref={register({ required: true })} />
                {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                <textarea name="projectDetails" placeholder="Project Details" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                <div className="row">
                    <div className="col">
                        <input type="number" name="price" placeholder="Price" className="form-control" ref={register({ required: true })} />
                        {errors.price && <span className="text-danger"><small>Price is required</small></span>}
                    </div>
                    <div className="col">
                        <div className="custom-file">
                            <input type="file" style={{cursor:'pointer'}} className="custom-file-input" name="file" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary px-4 py-2" value="Send" />
            </form>
        </main>
    );
};

export default Book;