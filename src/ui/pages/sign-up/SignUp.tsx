import { FormEvent, useState } from 'react';
import './SignUp.css';
import bg from '../../../assets/vectors/home-bg.svg';
import { Link } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';
import Notification from '../../atoms/notification/Notification';

export default function SignUp() {
    const [name, setName] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    function submitForm(event: FormEvent) {
        event.preventDefault();
        console.log('SENDING A GET REQUEST TO THE LOCALHOST BACKEND');
        console.log('THE REQUEST BODY IS:', {name, email, password});
        fetch('http://localhost:8000/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
            })
        }).then((result) => {
            setData(result);
            setIsLoading(false);
            console.log('ON THE CLIENT SIDE, THE RESULT IS:', result);
        }).catch((err) => {
            setIsLoading(false);
            setIsLoading(false)
            setError(err);
            console.log('ON THE CLIENT SIDE, THE ERROR IS:', err);
        });
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
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='Enter your email' />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder='Enter password' />
                    <input type="password" name='password2' placeholder='Confirm password' />
                    <div className="row-responsive space-between submit-div">
                        <button className='form-button' type="submit" value="SUBMIT">
                            {/* <Link className='undecorated-text' to={RouteNames.TIMELINE}>
                                <span>
                                    SUBMIT
                                </span>
                            </Link> */}
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