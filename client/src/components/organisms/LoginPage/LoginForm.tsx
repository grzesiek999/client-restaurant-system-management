import React from "react";


const LoginForm = () => {

    const submit = () => {

    }

    return(
        <div>
            <form onSubmit={submit}>
                <input type="email" placeholder="email@gmail.com" />
                <input type="haslo" placeholder="haslo" />
                <button type="submit">Zaloguj</button> 
            </form>
        </div>
    );
}

export default LoginForm;