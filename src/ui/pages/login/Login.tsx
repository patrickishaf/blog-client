import { FormEvent, useState } from 'react';
import './Login.css';
import bg from '../../../assets/vectors/home-bg.svg';
import { Link } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm(event: FormEvent) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            });
            const data = await response.json();
            console.log('LOGIN DATA:', data);
        } catch (err) {
            const error = err as Error;
            console.log('ERROR LOGGING IN', error);
        }
    }

    return (
        <div id='sign-up-root' className='row'>
            <aside className='welcome-img-container'>
                <img className='welcome-bg' src={bg} alt="welcome background" />
                <h1 className='welcome-title'>Login</h1>
            </aside>
            <main className='home-main column center-content'>
                <div>
                    <h1 className='home-title'>Welcome</h1>
                    <h6 className='home-subtitle'>Let's log you in quickly</h6>
                </div>
                <form onSubmit={submitForm} className='column auth-form' action="" method="post">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder='Enter password' />
                    <div className="row-responsive space-between submit-div">
                    <button className='form-button' type="submit" value="SUBMIT">
                        <span>
                            LOGIN
                        </span>
                        </button>
                        <p className='white-text'>
                            don't have an account?
                            <br/><Link className='undecorated-text' to={RouteNames.REGISTER}>
                                <span className='green-text'>
                                    sign-up
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </main>
        </div>
    )
}