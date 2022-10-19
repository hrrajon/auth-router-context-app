import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log('context',user);

    const handleSignOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
    }
    return (
    <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl">AUTH</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {user?.email && <span>Welcome, {user.email}</span> }
        {
            user?.email ?
            <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
            : <button className="btn btn-sm"><Link to='/login'>Log In</Link></button>
        }
    </div>
    );
};

export default Header;