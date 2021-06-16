import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
    const context = useContext(AppContext);
    console.log(context);

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const loginHandler = ({ email, password }) => {
        // create data to be sent to the api for validation
        let userdata = {
            email: email,
            password: password,
        };

        fetch(
            'https://user-manager-three.vercel.app/api/user/login',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userdata),
            }
        )
            .then(res => res.json())
            .then(result => {
                if (result.error === true) {
                    return alert(result.message);
                }

                context.dispatch({
                    type: 'LOGIN',
                    payload: result.body,
                });

                history.push('/shopping-list');
            })
            .catch(err => {
                alert(
                    'Unable to complete request. Please try again after some time'
                );
                console.log({ err });
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(loginHandler)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='Username'
                        id='username'
                        placeholder='username here'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='password here'
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

export default Login;