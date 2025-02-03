// import { useEffect, useState } from 'react';
// import { login } from '../../utils/auth';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../../store/auth';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const [username, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         if (isLoggedIn()) {
//             navigate('/');
//         }
//     }, []);

//     const resetForm = () => {
//         setEmail('');
//         setPassword('');
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         const { error } = await login(username, password);
//         if (error) {
//             alert(error);
//         } else {
//             navigate('/');
//             resetForm();
//         }
//         setIsLoading(false);

//     };
//     return (
//         <section>
//             <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
//                 <div className="container">
//                     {/* Section: Login form */}
//                     <section className="">
//                         <div className="row d-flex justify-content-center">
//                             <div className="col-xl-5 col-md-8">
//                                 <div className="card rounded-5">
//                                     <div className="card-body p-4">
//                                         <h3 className="text-center">Login</h3>
//                                         <br />

//                                         <div className="tab-content">
//                                             <div
//                                                 className="tab-pane fade show active"
//                                                 id="pills-login"
//                                                 role="tabpanel"
//                                                 aria-labelledby="tab-login"
//                                             >
//                                                 <form onSubmit={handleLogin}>
//                                                     {/* Email input */}
//                                                     <div className="form-outline mb-4">
//                                                         <label className="form-label" htmlFor="Full Name">
//                                                             Email Address
//                                                         </label>
//                                                         <input
//                                                             type="text"
//                                                             id="username"
//                                                             name="username"
//                                                             value={username}
//                                                             onChange={(e) => setEmail(e.target.value)}
//                                                             className="form-control"

//                                                         />
//                                                     </div>

//                                                     <div className="form-outline mb-4">
//                                                         <label className="form-label" htmlFor="loginPassword">
//                                                             Password
//                                                         </label>
//                                                         <input
//                                                             type="password"
//                                                             id="password"
//                                                             name="password"
//                                                             value={password}
//                                                             onChange={(e) => setPassword(e.target.value)}
//                                                             className="form-control"
//                                                         />
//                                                     </div>

//                                                     <button className='btn btn-primary w-100' type="submit" disabled={isLoading}>
//                                                         {isLoading ? (
//                                                             <>
//                                                                 <span className="mr-2 ">Processing...</span>
//                                                                 <i className="fas fa-spinner fa-spin" />
//                                                             </>
//                                                         ) : (
//                                                             <>
//                                                                 <span className="mr-2">Sign In </span>
//                                                                 <i className="fas fa-sign-in-alt" />
//                                                             </>
//                                                         )}
//                                                     </button>

//                                                     <div className="text-center">
//                                                         <p className='mt-4'>
//                                                             Don't have an account? <Link to="/register">Register</Link>
//                                                         </p>
//                                                         <p className='mt-0'>
//                                                             <Link to="/forgot-password" className='text-danger'>Forgot Password?</Link>
//                                                         </p>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </section>
//     );
// };

// export default Login;
import { login } from '../../utils/auth'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState("")
    const navigate = useNavigate()
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/')
        }
    })

    const resetForm = () => {
        setEmail("")
        setPassword("")
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { error } = login(email, password)
        if (error) {
            alert(error)
        } else {
            navigate('/')
            resetForm()
        }
        setIsLoading(false)


    }



    return (
        <div>
            <h2>Well Come Back</h2>
            <p>Login To Continue</p>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login