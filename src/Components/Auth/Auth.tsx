import React, { FormEvent, useContext, useState } from 'react';
import Context from '../../Context/context';
import http from '../../http';
import './Auth.css';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const JSON_URL = "http://fakestoreapi.com/auth/login";

    const {setIsAuth, setOpenModal} = useContext(Context);
    const login = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        http.post(JSON_URL, {username: username, password: password}).then(res => { 
            localStorage.setItem("token", res.data.token);
            setIsAuth(true);
            setOpenModal(false);
        })
    };
    // 'mor_2314', '83r5^_'
    return (
        <form onSubmit={(event) => login(event)} className="form" style={{width: "100%"}}>
            <div className="input_username">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <input 
                    onChange={(event) => setUsername(event.target.value)} 
                    id="username" 
                    placeholder="Enter your username"
                />
                <label htmlFor="username" className="col-sm-2 col-form-label">Password</label>
                <input 
                    onChange={(event) => setPassword(event.target.value)} 
                    id="password" 
                    placeholder="Enter your password"
                />
            </div>
            <div className="button">
                <button className="btn btn-success">Sign in</button>
            </div>
        </form>
    );
};

export default Auth;