import "./signup.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [switchSide, setSwitchSide] = useState(true)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_2, setPassword_2] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [messageClass, setMessageClass] = useState("error_message")

    const switch_side = () => {
        setSwitchSide(!switchSide)
    }


    const RegisterUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const RegisterResponse = await fetch('http://127.0.0.1:8000/api/register/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({full_name: fullName, email: email, password: password, password_2: password_2})
            });
            if (RegisterResponse.status == 409) {
                const responseData = await RegisterResponse.json();
                setErrorMessage(responseData.errors)
                setMessageClass("error_message show_error")
                setTimeout(() => {setMessageClass("error_message")}, 5000); 
                
            } else if (RegisterResponse.status == 201) {
                const responseData = await RegisterResponse.json();
                setErrorMessage(responseData.message)
                setMessageClass("error_message show_success ")
                setTimeout(() => {setMessageClass("error_message")}, 5000); 
                window.location.href = '/confirm-email'
            }
            else if (!RegisterResponse.ok) {
                throw new Error("failed to send data!");
            } else {
                console.log(RegisterResponse.status)
            }


        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const LoginUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const LoginResponse = await fetch('http://127.0.0.1:8000/api/login/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password})
            });
            if (LoginResponse.status == 409) {
                const responseData = await LoginResponse.json();
                console.log(responseData)
                setErrorMessage(responseData.errors)
                setMessageClass("error_message show_error")
                setTimeout(() => {setMessageClass("error_message")}, 5000); 
                
            } else if (LoginResponse.status == 201) {
                const responseData = await LoginResponse.json();
                console.log(responseData)
                setErrorMessage(responseData.message)
                setMessageClass("error_message show_success ")
                setTimeout(() => {setMessageClass("error_message")}, 5000); 
                window.location.href = '/Home'
            }
            else if (!LoginResponse.ok) {
                throw new Error("failed to send data!");
            } else {
                console.log(LoginResponse.status)
            }


        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    return (
        <div className="authentication_page">
            <div className={messageClass}>{errorMessage}</div>
            <div className="authentication_form">
                <form className="signin" onSubmit={LoginUser} style={{opacity: switchSide ? 1 : 0, visibility: switchSide ? "visible" : "hidden", transform: switchSide ? "translateX(0%)" : "translateX(25%)"}}>
                    <h2>Sign in</h2>
                    <input className="auth_form_input" value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" placeholder="Email"></input>
                    <input className="auth_form_input" value={password} onChange={(event) => {setPassword(event.target.value)}} type="password" placeholder="Password"></input>
                    <a>Forgot your password?</a>
                    <button className="auth_button" type="submit">Sign in</button>
                    <p className="auth_mobile">Don't have an account?<a href="#" onClick={switch_side}>Sign up</a></p>
                    {/* <button className="guest_signin_button">Sign in as a guest</button>     */}
                    <Link to="Home/" className="guest_signin_button">Sign in as a guest</Link> 
                </form>
                <form className="signup" onSubmit={RegisterUser} style={{opacity: !switchSide ? 1 : 0, visibility: !switchSide ? "visible" : "hidden", transform: !switchSide ? "translateX(100%)" : "translateX(75%)"}}>
                    <h2>Create Account</h2>
                    <input className="auth_form_input" value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" placeholder="Full Name"></input>
                    <input className="auth_form_input" value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email"></input>
                    <input className="auth_form_input" value={password} onChange={(event) => setPassword(event.target.value)}  type="password" placeholder="Password"></input>
                    <input className="auth_form_input" value={password_2} onChange={(event) => setPassword_2(event.target.value)}  type="password" placeholder="Confirm Password"></input>
                    <button className="auth_button" type="submit">Sign up</button>
                    <p className="auth_mobile">Already have an account?<a href="#" onClick={switch_side}>Sign in</a></p>
                </form>
                <div className="auth_content" style={{left: switchSide ? "50%" : 0, borderRadius: switchSide ? "0 20px 20px 0": "20px 0 0 20px"}}>
                </div>
                <div className="auth_content_text" style={{opacity: switchSide ? 1 : 0, visibility: switchSide ? "visible" : "hidden", transform: switchSide ? "translateX(100%)" : "translateX(130%)"}}>
                        <h2 className="auth_switch_heading">Hello, Friend!</h2>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="auth_switch_button" onClick={switch_side}>Sign up</button>
                </div>
                <div className="auth_content_text" style={{opacity: !switchSide ? 1 : 0, visibility: !switchSide ? "visible" : "hidden", transform: !switchSide ? "translateX(0%)" : "translateX(-30%)"}}>
                        <h2 className="auth_switch_heading">Welcome Back!</h2>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="auth_switch_button" onClick={switch_side}>Sign in</button>
                </div>
            </div>
        </div>
    )
 
};

export default SignUp;