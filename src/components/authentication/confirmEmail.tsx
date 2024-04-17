import "./confirmEmail.css"
import { useRef, ChangeEvent, useState, useEffect } from "react";


    const ConfirmEmail = () => {
        const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
        const [authenticating, setAuthenticating] = useState(false)

        const handleInput = (index:number, e: ChangeEvent<HTMLInputElement>) => {
            const input = inputRefs[index].current;
            if (input && e.target.value.length >= input.maxLength && inputRefs[index + 1]) {
                input.disabled = true;
                const nextInput = inputRefs[index + 1].current
                if (nextInput) {
                    nextInput.disabled = false; // Optional chaining to safely access focus()
                }
                inputRefs[index + 1].current?.focus(); // Optional chaining to safely access focus()
            }
            if (input && e.target.value.length >= input.maxLength && index + 1 == 6) {
                setAuthenticating(!authenticating)
            }
        };

        const handleKeyDown = (index:number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.keyCode === 8) {
              const currentInput = inputRefs[index].current
              if (currentInput && inputRefs[index - 1]) {
                currentInput.disabled = true;
                const previousInput = inputRefs[index - 1].current
                if (previousInput) {
                    previousInput.disabled = false; // Optional chaining to safely access focus()
                    previousInput.value = ""
                }
                inputRefs[index - 1].current?.focus(); // Optional chaining to safely access focus()
            }
            }
          };



    return (
        <div>
            <div className="comfirm-email">
                <h1>OTP Authentication</h1>
                <p>Enter the 6 digit OTP sent to your Email</p>
                <div id="otp" className="otp-box">
                    <input className="otp-slot" type="number" id="first" maxLength={1} ref={inputRefs[0]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(0, e)}}/>
                    <input className="otp-slot" type="number" id="second" maxLength={1} ref={inputRefs[1]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(1, e)}} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(1, e)}} disabled/>
                    <input className="otp-slot" type="number" id="third" maxLength={1} ref={inputRefs[2]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(2, e)}} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(2, e)}} disabled/>
                    <input className="otp-slot" type="number" id="fourth" maxLength={1} ref={inputRefs[3]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(3, e)}} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(3, e)}} disabled/>
                    <input className="otp-slot" type="number" id="fifth" maxLength={1} ref={inputRefs[4]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(4, e)}} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(4, e)}} disabled/>
                    <input className="otp-slot" type="number" id="sixth" maxLength={1} ref={inputRefs[5]} onInput={(e: ChangeEvent<HTMLInputElement>) => {handleInput(5, e)}} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(5, e)}} disabled/>
                </div>
                {authenticating && <p>Authenticating...</p>}
            </div>
        </div>
    )
}

export default ConfirmEmail;