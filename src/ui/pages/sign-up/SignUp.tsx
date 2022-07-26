import { FormEvent, useState } from 'react';
import './SignUp.css';
import bg from '../../../assets/vectors/home-bg.svg';
import { Link } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';
import Notification from '../../atoms/notification/Notification';

export default function SignUp() {
    const minimumPasswordLength = 6;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [secondPasswordError, setSecondPasswordError] = useState('');

    function validateName(): boolean {
        return name.length > 0;
    }

    function validateEmail(): boolean {
        return email.includes('@') && email.includes('.');
    }

    function validatePassword(): boolean {
        return password.length > minimumPasswordLength;
    }

    function ensurePasswordsMatch(): boolean {
        return password === secondPassword;
    }

    function validateUserInput(): boolean {
        if (validateName() && validateEmail() && validatePassword() && ensurePasswordsMatch()) {
            setNameError('');
            setEmailError('');
            setPasswordError('');
            setSecondPasswordError('');
            return true;
        }
        if (!validateName()) {
            setNameError('please enter your name');
        }
        if (!validateEmail()) {
            setEmailError('please enter a valid email');
        }
        if (!validatePassword()) {
            setPasswordError('your password mut be more than 6 letters')
        }
        if (!ensurePasswordsMatch()) {
            setSecondPasswordError('passwords do not match');
        }
        return false;
    }

    async function submitForm(event: FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        if (validateUserInput()) {
            const response = await fetch('http://localhost:8000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            });
            const data = await response.json();
            console.log('BLOG CLIENT:: data from API:', data);
        }
    }

    return (
        <div id='sign-up-root' className='row'>
            <Notification type='success' title='success' subtitle='You can log in now' />
            <aside className='welcome-img-container'>
                <img className='welcome-bg' src={bg} alt="welcome background" />
                <h1 className='welcome-title'>Sign Up</h1>
            </aside>
            <main className='home-main column center-content'>
                <div>
                    <h1 className='home-title'>Welcome</h1>
                    <h6 className='home-subtitle'>Let's sign you up quickly</h6>
                </div>
                <form onSubmit={submitForm} className='column auth-form'>
                    <input onChange={(e)=>setName(e.target.value)} type="text" name='name' placeholder='Enter your name' />
                    <p className='input-error-text'>{nameError}</p>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='Enter your email' />
                    <p className='input-error-text'>{emailError}</p>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder='Enter password' />
                    <p className='input-error-text'>{passwordError}</p>
                    <input onChange={(e) => setSecondPassword(e.target.value)} type="password" name='password2' placeholder='Confirm password' />
                    <p className='input-error-text'>{secondPasswordError}</p>
                    <div className="row-responsive space-between submit-div">
                        <button className='form-button' type="submit" value="SUBMIT">
                            <span>
                                SUBMIT
                            </span>
                        </button>
                        <p className='white-text'>
                            already have an account?
                            <br/><Link className='undecorated-text' to={RouteNames.LOGIN}>
                                <span className='green-text'>
                                    login
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </main>
        </div>
    )
}