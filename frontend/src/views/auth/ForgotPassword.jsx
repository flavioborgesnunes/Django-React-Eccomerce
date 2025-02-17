import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import apiInstance from '../../utils/axios';
import Swal from 'sweetalert2'

function ForgotPassword() {

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const axios = apiInstance
    const [searchParams] = useSearchParams();
    const otp = searchParams.get('otp');
    const uuid = searchParams.get('uuid');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }


    // const handleEmailSubmit = () => {
    //     axios.get(`user/password-reset/${email}/`).then((res) => {
    //         console.log(res.data);
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Password Reset Email Sent!',
    //         })
    //     })

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                alert("An E-mail Has Been Sent To You")
                setIsLoading(false)
            })

        } catch (error) {
            alert("E-mail Does Not Exists")
            setIsLoading(false)

        }
    }


    return (
        <section>
            <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
                <div className="container">
                    {/* Section: Login form */}
                    <section className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-5 col-md-8">
                                <div className="card rounded-5">
                                    <div className="card-body p-4">
                                        <h3 className="text-center">Forgot Password</h3>
                                        <br />

                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-login"
                                                role="tabpanel"
                                                aria-labelledby="tab-login"
                                            >
                                                <div>
                                                    {/* Email input */}
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="Full Name">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            onChange={handleEmailChange}
                                                        />
                                                    </div>

                                                    <div className="text-center">
                                                        {isLoading === true
                                                            ? <button disabled className='btn btn-primary w-100'>
                                                                Processing...
                                                            </button>
                                                            : <button onClick={handleSubmit} type="button" className='btn btn-primary w-100'>
                                                                Send E-mail
                                                                <i className='fas fa-paper-plane'></i>
                                                            </button>
                                                        }
                                                        <p className='mt-3'>want to  sign in? <Link to="/login">Register</Link></p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    )
}

export default ForgotPassword

// import { useState } from 'react'
// import apiInstance from '../../utils/axios'
// // import { useNavigate } from 'react-router-dom'

// function ForgotPassword() {
//     const [email, setEmail] = useState("")

//     // const navigate = useNavigate()

//     const handleSubmit = async () => {
//         try {
//             await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
//                 alert("An E-mail Has Been Sent To You")
//             })

//         } catch (error) {
//             alert("E-mail Does Not Exists")

//         }
//     }

//     return (
//         <div>
//             <h1>Forgot Password</h1>
//             <input type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='Enter E-mail'
//                 name=''
//                 id='' />
//             <br />
//             <br />
//             <button onClick={handleSubmit}>Reset Password</button>
//         </div>
//     )
// }

// export default ForgotPassword
