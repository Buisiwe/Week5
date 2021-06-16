function Register() {
    return (
        <div>
            <form action=''>
                <div>
                    <label htmlFor='email'>Firstname</label>
                    <input
                        type='text'
                        name='firstname'
                        id='username'
                        placeholder='firstname here'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='email'>Lastname</label>
                    <input
                        type='text'
                        name='lastname'
                        id='username'
                        placeholder='lastname here'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='email'>Username</label>
                    <input
                        type='text'
                        name='Username'
                        id='username'
                        placeholder='username here'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='email'>Password</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='password here'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='email'>Confirm Password</label>
                    <input
                        type='text'
                        name='confirmpassword'
                        id='confirmpassword'
                        placeholder='confirm password here'
                    />
                </div>
                <br />
                <button class='btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Register;