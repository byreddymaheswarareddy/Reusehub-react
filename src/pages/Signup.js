import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import CustomInput from '../components/CustomInput';
import * as yup from 'yup';

const signUpSchema = yup.object({
  username: yup.string().required("user name is required"),
  email: yup.string().nullable().email("email is required"),
  password: yup.string().required("password is required"),

});

const Signup = () => {
const formik = useFormik({
  initialValues: {
    username: "",
    email: "",
    password: "",
  },
  validationSchema: signUpSchema,
  onSubmit: (values) => {
    console.log(formik.errors); // Log validation errors
    console.log(formik.touched); // Log touched fields
    alert(JSON.stringify(values, null, 2));
  },
});

return (
    <>
      <div className="container-fluid body p-md-5 text-center " style={{ marginTop: '150px', paddingBottom: '80px'}}>
      <div className="container bg-black p-4 rounded text-white">
          <Link to="/home">
            <img className="login-form" src="asserts/REUSEHUB.jpg" alt="Logo" />
          </Link>
          <h1>Sign Up</h1>
          <form className="login-form" action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">{formik.errors.username && formik.touched.username && formik.errors.username}</div>
        <CustomInput
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">{formik.errors.email && formik.touched.email && formik.errors.email}</div>
        <CustomInput
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">{formik.errors.password && formik.touched.password && formik.errors.password}</div>
        <button type="submit">Sign Up</button>
      </form>
          <h5>Or sign up with:</h5>
      <Link to="/" className="social-button google">Sign up with Google</Link>

      <h5>Already have an account? <Link to="/login">Sign In</Link></h5>
        </div>
      </div>
    </>
  );
};

export default Signup