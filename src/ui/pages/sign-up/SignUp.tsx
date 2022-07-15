import react, { FormEvent } from 'react';
import './SignUp.css';
import bg from '../../../assets/vectors/home-bg.svg';
import { Link } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';
import Notification from '../../atoms/notification/Notification';

export default function SignUp() {
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
                <form onSubmit={submitForm} className='column auth-form' action="" method="post">
                    <input type="text" name='name' placeholder='Enter your name' />
                    <input type="email" name='email' placeholder='Enter your email' />
                    <input type="password" name='password' placeholder='Enter password' />
                    <input type="password" name='password2' placeholder='Confirm password' />
                    <div className="row-responsive space-between submit-div">
                        <button className='form-button' type="submit" value="SUBMIT">
                            <Link className='undecorated-text' to={RouteNames.TIMELINE}>
                                <span>
                                    SUBMIT
                                </span>
                            </Link>
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

function submitForm(event: FormEvent) {
    event.preventDefault();
}