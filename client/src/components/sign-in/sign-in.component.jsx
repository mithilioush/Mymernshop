import { React, Component } from 'react';
import { connect } from 'react-redux';
import "./sign-in.style.scss";
import InputField from '../input-field/input-field.component';
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


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
        const { emailSignInStart } = this.props;
        emailSignInStart(email, password)
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }


    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Signin with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <InputField name='email' type='email' handleChange={
                        this.handleChange
                    }
                        label="Email" value={this.state.email}
                        required />

                    <InputField name='password' type='password' handleChange={
                        this.handleChange
                    }
                        label="Password"
                        value={this.state.password}
                        required />
                    <CustomButton type='SUBMIT'>SUBMIT</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} >{' '}Sign In With Google {' '}</CustomButton>
                </form>
            </div>
        )
    }
}
const mapDispatchToPropd = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToPropd)(SignIn);