import React, { SyntheticEvent, useState } from "react";
import "../../../styles/index.scss";


const AddWorkerForm = () => {

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value);
    };

    const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handleRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    };

    const createWorker = async (e: SyntheticEvent) =>{
        e.preventDefault();

        if(password===repeatPassword){
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password,
                    role
                })
            });
            if(response.ok) { setMessage('Pomyslnie utworzono pracownika'); }
            else { setMessage('error'); }
        }
        else { setMessage('Podane hasła nie są takie same'); }
    }

    return(
        <div className="add-worker-form-div-wrapper">
            <form onSubmit={createWorker}>
                <input
                    type="text"
                    placeholder="Imie"
                    required
                    onChange={handleFirstname}
                />
                <input
                    type="text"
                    placeholder="Nazwisko"
                    required
                    onChange={handleLastname}
                />
                <input
                    type="email"
                    placeholder="email@email.com"
                    required
                    onChange={handleEmail}
                />
                <input
                    type="password"
                    placeholder="hasło"
                    required
                    onChange={handlePassword}
                />
                <input
                    type="password"
                    placeholder="powtorz hasło"
                    required
                    onChange={handleRepeatPassword}
                />
                <input
                    type="text"
                    placeholder="Rola"
                    required
                    onChange={handleRole}
                />
                <button type="submit">Stwórz</button>
            </form>
            {message && <div>{message}</div>}
        </div>
    )
}

export default AddWorkerForm;