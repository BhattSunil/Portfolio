import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset, // <-- reset function
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    try {
      await axios.post('https://getform.io/f/agdlmypb', userInfo);
      toast.success('Your Message has been sent');
      reset(); // <-- reset the form here
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl'>Contact me</h1>
      <span>Please fill out the form below to contact me.</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
        >
          <h1 className='text-xl font-semibold'>Send Your Message</h1>

          {/* Name */}
          <div className='flex flex-col mb-4 mt-3'>
            <label className='block text-gray-700'>Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-slate-100'
              id='name'
              name='name'
              placeholder='Enter Your Full Name'
            />
            {errors.name && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Email */}
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Email Address</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-slate-100'
              id='email'
              name='email'
              placeholder='Enter Your Email Address'
            />
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>

          {/* Message */}
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Message</label>
            <textarea
              {...register("message", { required: true })}
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-slate-100'
              id='message'
              name='message'
              placeholder='Enter Your Query'
            />
            {errors.message && <span className='text-red-500'>This field is required</span>}
          </div>

          <button
            type='submit'
            className='bg-black text-white rounded-xl px-6 py-2 hover:bg-slate-700 duration-300'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
