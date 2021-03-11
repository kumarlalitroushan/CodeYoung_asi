import react from 'react';

const Login = (props) => {
    const {loginGoogle,email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, sethasAccount, emailError, passwordError } = props;
    return (
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>SignIn</button>
                    <p>Don't have an account ? <span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span></p>
                    <button onClick={loginGoogle}>Sign in with Google</button>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>SignUp</button>
                    <p>Have an account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
        </div>
        </section>
    )
};

export default Login;