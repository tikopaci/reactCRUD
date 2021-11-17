import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddUserForm(props) {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" className="colorFondo2" {
                ...register('name', {
                    required: {
                        value: true, 
                        message: 'Required field'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Max 10 chars'
                    },
                    minLength: {
                        value: 3,
                        message: 'Min 3 chars'
                    }
                })
            } />
            <div className="text-danger my-1">
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" className="colorFondo2" {
                ...register('username', {
                    required: {
                        value: true, 
                        message: 'Required field'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Max 10 chars'
                    },
                    minLength: {
                        value: 3,
                        message: 'Min 3 chars'
                    }
                })
            } />
            <div className="text-danger my-1">
                {errors?.username?.message}
            </div>
            <button className="btn btn-danger">CREATE USER!</button>
        </form>
    );   
};
