import React, { SyntheticEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setItemWithExpiry } from "../../../utils/LocalStorageManagment";
import { UserAuth } from "../../../context/UserDataContext";
import { SESSION } from "../../../constant/UserSession";


const LoginForm = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {user, sigIn} = useContext(UserAuth);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        if(response.ok){
            const content = await response.json();
            sigIn(setItemWithExpiry(SESSION.USER, content, SESSION.EXPIRY));
            return navigate('/user');
        }
        return setMessage('ERROR');
    };

    return(
        <div>
            <form onSubmit={submit}>
                <input 
                    type="email" 
                    placeholder="email@gmail.com"
                    required 
                    onChange={handleEmail}
                />
                <input 
                    type="password" 
                    placeholder="haslo"
                    required
                    onChange={handlePassword} 
                />
                <button type="submit">Zaloguj</button> 
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default LoginForm;