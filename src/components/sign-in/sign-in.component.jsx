import { React, Component } from 'react';
import "./sign-in.style.scss";
import InputField from '../input-field/input-field.component';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputField name='email' type='email' handleChange={
                        this.handleChange
                    }
                        label="Email"
                        value={this.state.email}
                        required />

                    <InputField name='password' type='password' handleChange={
                        this.handleChange
                    }
                        label="Password"
                        value={this.state.password}
                        required />
                    <CustomButton type='SUBMIT'>SUBMIT</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >{' '}Sign In With Google {' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;