import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import axios from "axios";
import Endpoints from "../../config/Endpoints";
import { setLoggedInUser } from "../../actions/auth";

import '../../styles/sb-admin-pro/css/styles.css'

const Register = ({ setLoggedInUser }) => {

    const [redirect, setRedirect] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const attemptRegister = () => {

        const { name, email, password } = formData;

        /**
         * Get data from endpoint
         */
        axios.post(Endpoints.REGISTER, {
            name,
            email,
            password,
            accountId: 1 // temporary
        })
            .then(({ data }) => {
                setLoggedInUser(data.user);
                setRedirect('/');
            })
            .catch(error => {
                alert("Invalid credentials");
            });

    }

    const onSubmit = (e) => {
        // e.preventDefault();

        if (!formData.name || !formData.email || !formData.confirmPassword) {
            alert('Please provide your name, email address and password.')
        } else if (!validateEmail(formData.email)) {
            alert('Please provide a valid email address.')
        } else if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.')
        } else {
            attemptRegister();
        }
    };

    const onSimpleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // code to run on component mount
    }, [])

    if (redirect) {
        return <Redirect to='/' />
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={(e) => onSubmit(e)}>
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="name">Full Name</label>
                                                <input
                                                    className="form-control form-control-solid py-4"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter full name"
                                                    value={formData.name}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                <input
                                                    className="form-control form-control-solid py-4"
                                                    type="email"
                                                    placeholder="Enter email address"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={(e) => onSimpleFormChange(e)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                        <input
                                                            className="form-control form-control-solid py-4"
                                                            type="password"
                                                            placeholder="Enter password"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={(e) => onSimpleFormChange(e)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputConfirmPassword">Confirm Password</label>
                                                        <input
                                                            className="form-control form-control-solid py-4"
                                                            type="password"
                                                            placeholder="Confirm password"
                                                            name="confirmPassword"
                                                            value={formData.confirmPassword}
                                                            onChange={(e) => onSimpleFormChange(e)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-4 mb-0">
                                                <a className="btn btn-primary btn-block" href="#!" onClick={(e) => onSubmit(e)}>
                                                    Create Account
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small">
                                            <Link to='/login'>Have an account? Go to login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="footer mt-auto footer-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &copy; Trench Dev 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                &middot;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setLoggedInUser: (user) => dispatch(setLoggedInUser(user))
})

export default connect(null, mapDispatchToProps)(Register);