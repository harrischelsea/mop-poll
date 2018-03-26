import React, { Component } from 'react';
import { Grid, Header, Segment, Button, Message, Form, Container, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {registerUser, passwordChanged, usernameChanged, confirmPasswordChanged, emailChanged} from "../../actions/RegisterActions";

import '../login/Login.css';

class Register extends Component {

    handleUsernameChanged = e => {
        this.props.usernameChanged(e.target.value);
    };
    handlePasswordChanged = e => {
        this.props.passwordChanged(e.target.value);
    };
    handleConfirmPasswordChanged = e => {
        this.props.confirmPasswordChanged(e.target.value);
    };
    handleEmailChanged = e => {
        this.props.emailChanged(e.target.value);
    };
    handleRegister = () => {
        const { username, password, confirmPassword, email } = this.props;
        this.props.registerUser({ username, password, confirmPassword, email });
    };

    render() {
        if (this.props.successRegister){
            return <Redirect to='/login' />
        }
        if (this.props.successRegister === false ) {
            return <div>Error</div>
        }
        return (
            <div className='background'>
                <Container>
                    <Grid centered>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Header as='h4' textAlign='center'>
                                Please complete your registration by filling the form
                            </Header>
                            <Form size='large'>
                                <Form.Input className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='Username'
                                    onChange={this.handleUsernameChanged}
                                    value={this.props.username}
                                    name="username"
                                />
                                <Form.Input className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={this.handleEmailChanged}
                                    value={this.props.email}
                                    name="email"
                                />
                                <Form.Input className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handlePasswordChanged}
                                    value={this.props.password}
                                    name="password"
                                />
                                <Form.Input className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='Confirm password'
                                    type='password'
                                    onChange={this.handleConfirmPasswordChanged}
                                    value={this.props.confirmPassword}
                                    name="confirmPassword"
                                />

                                <Button
                                    color='white'
                                    fluid size='large'
                                    onClick={this.handleRegister}
                                >
                                    Register</Button>
                            </Form>
                            <Message>
                                <h3>Already registered?</h3> <Link to="/login"> Sign in </Link>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

        );
    }
}

const mapStateToProps = ({ register }) => {
    const { username, password, error, successRegister, loading, email, confirmPassword} = register;
    return { username, password, error, successRegister, loading, email, confirmPassword};
};

export default connect(mapStateToProps, {
    usernameChanged, passwordChanged, confirmPasswordChanged, emailChanged, registerUser
})(Register);