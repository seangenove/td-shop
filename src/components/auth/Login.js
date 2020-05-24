import React from 'react';

import '../../styles/sb-admin-pro/css/styles.css'

const Login = () => {
    return (
        <div>
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                                    <div className="card my-5">
                                        <div className="card-body px-5 py-4 text-center">
                                            <div className="h3 font-weight-light">Log In</div>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="card-body px-4 py-4">
                                            <form>
                                                <div className="form-group">
                                                    <label className="text-gray-600" htmlFor="emailExample">Email address</label>
                                                    <input
                                                        className="form-control form-control-solid py-4"
                                                        type="text"
                                                        placeholder=""
                                                        aria-label="Email Address"
                                                        aria-describedby="emailExample"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-gray-600" htmlFor="passwordExample">Password</label>
                                                    <input
                                                        className="form-control form-control-solid py-4"
                                                        type="password"
                                                        placeholder=""
                                                        aria-label="Password"
                                                        aria-describedby="passwordExample"
                                                    />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between mb-0">
                                                    <a className="small" href="#!">Forgot your password?</a>
                                                    <a className="btn btn-primary" href="#!">Login</a>
                                                </div>
                                            </form>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="card-body px-5 py-4">
                                            <div className="small text-center">New user? <a href="#!">Create an account!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Login;