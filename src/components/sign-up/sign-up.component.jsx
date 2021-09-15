import React from 'react'

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import InputField from '../input-field/input-field.component'
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password and confirm password not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (ex) {
            console.error(ex);
        }
        createUserProfileDoc()
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have a account</h1>
                <span>Sign up with your emmail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputField
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Name'
                        required
                    />
                    <InputField
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        onChange={this.handleChange}
                        required
                    />
                    <InputField
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <InputField
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Resister</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;