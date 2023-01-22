import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
    console.log('auth', auth);

    const authButton = auth ? (
        <a href='/api/logout'>Logout</a>
    ) : (
        <a href='/api/auth/google' target='_blank' >Login</a>
    );

    return (
        <header>
            <Link to='/'>React SSR</Link>
            <div>
                <Link to='/users'>Users</Link>
                <Link to='/admins'>Admins</Link>
                {authButton}
            </div>
        </header>
    )
};

const mapStateToProps = (state) => ({
   auth: state.auth
});

export default connect(mapStateToProps)(Header);