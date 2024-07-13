import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  // Initialize the useForm hook
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting, isSubmitSuccessful, isSubmitError } = formState;

  const onSubmit = async (data) => {
    // Simulate a login request
    console.log('Form data:', data);
    return new Promise((resolve, reject) => setTimeout(() => {
      // Simulate success or error
      Math.random() > 0.5 ? resolve() : reject();
    }, 2000)); // Simulate a network request
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
      </div>
      <button type="submit" disabled={isSubmitting}>Login</button>
      
      {/* Display form status */}
      {isSubmitting && <p>Submitting...</p>}
      {isSubmitSuccessful && <p>Form submitted successfully!</p>}
      {isSubmitError && <p>There was an error submitting the form.</p>}
    </form>
  );
};

export default LoginForm;
