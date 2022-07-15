import react from 'react';
import './SignUp.css';
import bg from '../../../assets/vectors/home-bg.svg';

export default function SignUp() {
    return (
        <div id='sign-up-root' className='row'>
            <aside className='welcome-img-container'>
                <img className='welcome-bg' src={bg} alt="welcome background" />
                <h1 className='welcome-title'>Sign Up</h1>
            </aside>
            <main className='home-main column center-content'>
                <div>
                    <h1 className='home-title'>Welcome</h1>
                    <h6 className='home-subtitle'>Let's sign you up quickly</h6>
                </div>
                <form className='column auth-form' action="" method="post">
                    <input type="text" name='name' placeholder='Enter your name' />
                    <input type="email" name='email' placeholder='Enter your email' />
                    <input type="password" name='password' placeholder='Enter password' />
                    <input type="password" name='password2' placeholder='Confirm password' />
                    <div className="row-responsive space-between submit-div">
                        <button className='form-button' type="submit" value="SUBMIT">SUBMIT</button>
                        <p className='white-text'>already have an account?<br/><span className='green-text'>login</span> </p>
                    </div>
                </form>
            </main>
        </div>
    )
}