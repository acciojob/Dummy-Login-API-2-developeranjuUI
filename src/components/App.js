import React, { useState } from 'react';

function App() {

    const userData = {
        email: "user@gmail.com",
        password: "password123"
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserError('');
        setPasswordError('');
        setIsLoading(true);
    
    setTimeout(() => {
        if(email.trim() === '' || password.trim() === ''){
            setUserError("Please enter email and password");
            setIsLoading(false);
            return;
        }

        if(email !== userData.email){
            setUserError("User not found");
            setIsLoading(false);
            return;
        }
        if(password !== userData.password){
            debugger
            setPasswordError("Password Incorrect");
            setIsLoading(false);
            return;
        }

        alert("Login successful");
        setEmail('');
        setPassword('');
        setIsLoading(false);
    }, 3000)
}

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(userError) setUserError('');
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(passwordError) setPasswordError('');
    }

    return(
        <div style={{ margin: "auto",maxWidth: '400px',padding: '20px', border: '1px solid #ccc' }}>
            <form onSubmit={handleSubmit}>
            <div>
                <h1>Login Form</h1>
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor='email' style={{ fontSize: '18px', marginBottom: '10px' }}>Email:</label>
                    <input style={{ width: '100%', height: '25px' }} type="email" name="email" id='input-email' value={email} onChange={handleEmailChange} /><br />
                    {userError && (
                        <small id='user-error' style={{ color: 'red', fontSize: '16px' }}>
                            {userError}
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor='email' style={{ fontSize: '18px', marginBottom: '10px' }}>Password:</label>
                    <input style={{ width: '100%', height: '25px' }} type="password" name="password" id='input-password' value={password} onChange={handlePasswordChange} /><br />
                    {passwordError && (
                        <small id='password-error' style={{ color: 'red', fontSize: '16px' }}>
                            {passwordError}
                        </small>
                    )}
                </div>
                <button style={{marginTop: '15px', border: 'none', backgroundColor: 'blue', color: "#fff", padding: '8px 10px'}} id='submit-form-btn' type='submit' disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>

            </div>
            </form>
        </div>
    )
}

export default App;