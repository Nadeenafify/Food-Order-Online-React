import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from 'react-hot-toast';

// Define validation schema using Yup
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
});
const Contacts = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), // Use Yup validation
    });

    const onSubmit = (data) => {
        // console.log(data);
        toast.success("Submitted Successfuly")
    };
    return (
        <>
            <div className='mt-40 mx-4 sm:mx-20 lg:mx-40 xl:mx-60 h-[60vh] '>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                    
                        <label className='font-bold mb-3'>Name</label>
                        <input {...register("name")}  className='bg-gray-100 rounded p-2' />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    


           
                        <label className='font-bold mb-3 mt-2'>Email</label>
                        <input {...register("email")}  className='bg-gray-100 rounded p-2'/>
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                        <label className='font-bold mb-3 mt-2'>Comment</label>
                        <textarea {...register("comment")}  className='bg-gray-100 rounded p-2 h-[20vh]'/>
                       
                   


                        <button type='submit' className='bg-orange-500 w-1/4 lg:w-1/6  text-white px-3 py-1 rounded mt-10 cursor-pointer'>Submit</button>
                </form>

            </div>



        </>
    )
}

export default Contacts