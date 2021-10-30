import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';
const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
            console.log(res);
        })
    }
    return (
        <div className='text-center add-service'>
            <h1>Add your package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 200 })} />
                <textarea {...register("description")} placeholder="description"/>
                <input type="number" {...register("price")} placeholder="price"/>
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;