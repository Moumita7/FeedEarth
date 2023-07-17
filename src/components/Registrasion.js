import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// import Yup from "yup";
import * as Yup from "yup";
import { addUser } from './redux/slices/userSlice';
import { v4 as uuidv4 } from "uuid";

//formik for data handleing
//yup data validation


const Registrasion = () => {
  const dispatch = useDispatch();
  const user_data = useSelector((store) => store.user);
  // const cartItem = useSelector((store) => store.cart.items);

  console.log("us",user_data.userData
  )

  const uniqueID = uuidv4();
  const navigate = useNavigate();


  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const RegistrationSchema= Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(5).max(20).required("Please enter your password minimum 5"),
    confirm_password:Yup.string().required("Please enter your password minimum 5").oneOf([Yup.ref("password"),null],"password must match"),


  })

  // const Formik=useFormik({
    const { values, errors, touched, handleBlur, handleChange, handleSubmit }=useFormik({

    initialValues:initialValue,
    validationSchema:RegistrationSchema,
    // onSubmit:(val,action)=>{
    //   console.log(val)
    //   action.resetForm()

    // }
    onSubmit: (val, action) => {
      // const isUser = user_data.findIndex(
      //   (user) =>
      //     user?.email === val?.email && user?.password === val?.password
      // );
      // if (isUser === -1) {
        dispatch(addUser({ ...val, id: uniqueID }));
      action.resetForm()

        // resetForm({ val: "" });
        navigate("/login");
      } 
    // },


  })
  // console.log(errors)

  // console.log(Formik)



  return (
    <div className='bg-white flex justify-center' style={{padding:"10px"}}>
  <div style={{margin:"6px"}} className="w-full bg-slate-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className=" space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
              <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="name" name="name" id="name"   value={values?.name}   onChange={handleChange}
                onBlur={handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         placeholder="moumita" required=""/>
                         {errors.name && touched.name ?(
                         <p className='text-red-600'>{errors.name}</p>):null}
                         {/* <p>{errors.name}</p> */}

                        
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"      value={values?.email}   onChange={handleChange}
                onBlur={handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                       focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                         placeholder="name@gmail.com" required=""/>
                          {errors.email && touched.email ?(
                         <p className='text-red-600'>{errors.email}</p>):null}

                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password"  value={values?.password}   onChange={handleChange}
                onBlur={handleBlur}
                       placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        {errors.password && touched.password ?(
                         <p className='text-red-600'>{errors.password}</p>):null}

                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Confirm password</label>
                       <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your confirm password"
                type="password"
                name="confirm_password"
                value={values?.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.confirm_password && touched.confirm_password ?(
                         <p className='text-red-600'>{errors.confirm_password}</p>):null}
                      {/* <input type="password" name="confirm-password" id="confirm-password"   value={values?.confirm_password}  onChange={handleChange} */}
                {/* onBlur={handleBlur}     
                      placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/> */}
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label  className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <div>
                  <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                      {/* <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here</a> */}
                      <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/login">Login</Link>
                  </p>
              </form>
          </div>
      </div>
</div>
  )
}

export default Registrasion