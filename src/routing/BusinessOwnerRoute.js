import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const BusinessOwnerRoute = ({ component: Component, layout: Layout, loggedInUser, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            // if (!loggedInUser) {
            //     return <Redirect to='/login' />
            // } else if (loggedInUser.role !== 'admin' || loggedInUser.role !== 'business_owner') {
            //     return <Redirect to='/' />
            // } else {
            //     return (
            //         <Layout>
            //             <Component {...props} />
            //         </Layout>
            //     )
            // }
            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
        }}
    />
)

const mapStateToProps = (state) => ({
    loggedInUser: state.loggedInUser
})

export default connect(mapStateToProps)(BusinessOwnerRoute);