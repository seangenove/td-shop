import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { setToken, setLoggedInUser } from "../../actions/auth";
import { login, getLoggedInUser } from './../../services/AuthServices'

import '../../styles/sb-admin-pro/css/styles.css'

const Login = ({ setToken, setLoggedInUser, loggedInUser }) => {

    const [redirect, setRedirect] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const onSimpleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        attemptLogin();
    };

    const attemptLogin = () => {

        if (!formData.email || !formData.password) {
            alert('Please provide email address and password.')
        } else {

            login(formData, ({ access_token, token_type, expires_in }) => {
                setToken(access_token);

                getLoggedInUser(({ first_name, last_name, email, role }) => {
                    const user = { first_name, last_name, email, role, access_token }

                    setLoggedInUser(user);
                    setRedirect(user.role === 'business_owner' ? '/bo' : '/');
                }, error => {
                    alert("Invalid credentials");
                })
            }, (error) => {
                alert("Invalid credentials");
            });
        };
    };

    useEffect(() => {
        if (!(Object.keys(loggedInUser).length === 0 && loggedInUser)) {
            setRedirect(loggedInUser.role === 'business_owner' ? '/bo' : '/');
        }
    }, []);

    if (redirect) {
        return <Redirect to={redirect} />;
    }

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
                                            <form onSubmit={onSubmit}>
                                                <div className="form-group">
                                                    <label className="text-gray-600" htmlFor="emailExample">Email address</label>
                                                    <input
                                                        className="form-control form-control-solid py-4"
                                                        type="text"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={onSimpleFormChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-gray-600" htmlFor="passwordExample">Password</label>
                                                    <input
                                                        className="form-control form-control-solid py-4"
                                                        type="password"
                                                        name="password"
                                                        placeholder=""
                                                        aria-label="Password"
                                                        aria-describedby="passwordExample"
                                                        value={formData.password}
                                                        onChange={onSimpleFormChange}
                                                    />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between mb-0">
                                                    <a className="small" href="#!">Forgot your password?</a>
                                                    <a
                                                        href="#!"
                                                        className="btn btn-primary"
                                                        type="submit"
                                                        onClick={onSubmit}
                                                        style={{ color: 'white' }}
                                                    >
                                                        Login
                                                    </a>
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

const mapStateToProps = (state) => ({
    loggedInUser: state.loggedInUser
});

const mapDispatchToProps = dispatch => ({
    setToken: (access_token) => dispatch(setToken(access_token)),
    setLoggedInUser: (user) => dispatch(setLoggedInUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);