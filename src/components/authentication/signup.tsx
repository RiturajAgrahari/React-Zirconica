import "./signup.css"
import { useState } from "react";

const SignUp = () => {

    const [switchSide, setSwitchSide] = useState(true)

    const switch_side = () => {
        console.log("switching side")
        setSwitchSide(!switchSide)
    }

    return (
        <div className="authentication_page">
            <div className="authentication_form">
                <div className="signin" style={{opacity: switchSide ? 1 : 0, visibility: switchSide ? "visible" : "hidden", transform: switchSide ? "translateX(0%)" : "translateX(25%)"}}>
                    <h2>Sign in</h2>
                    <input className="auth_form_input" type="email" placeholder="Email"></input>
                    <input className="auth_form_input" type="password" placeholder="Password"></input>
                    <a>Forgot your password?</a>
                    <button className="auth_button">Sign in</button>
                    <p className="auth_mobile">Don't have an account?<a href="#" onClick={switch_side}>Sign up</a></p>
                    <button className="guest_signin_button">Sign in as a guest</button>    
                </div>
                <div className="signup" style={{opacity: !switchSide ? 1 : 0, visibility: !switchSide ? "visible" : "hidden", transform: !switchSide ? "translateX(100%)" : "translateX(75%)"}}>
                    <h2>Create Account</h2>
                    <input className="auth_form_input" type="text" placeholder="Full Name"></input>
                    <input className="auth_form_input" type="email" placeholder="Email"></input>
                    <input className="auth_form_input" type="password" placeholder="Password"></input>
                    <input className="auth_form_input" type="password" placeholder="Confirm Password"></input>
                    <button className="auth_button">Sign up</button>
                    <p className="auth_mobile">Already have an account?<a href="#" onClick={switch_side}>Sign in</a></p>
                </div>
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