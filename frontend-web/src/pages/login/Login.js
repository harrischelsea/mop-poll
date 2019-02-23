import React, { Component } from 'react';
import {Grid, Form, Header, Button, Message, Container} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUser } from '../../actions/LoginActions';
import './Login.css';
import { signOutUser } from "../../actions/UserActions";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        }
    }

    handleUsernameChanged = e => {
        this.props.usernameChanged(e.target.value);
        // this.setState({username: e.target.value})
    };
    handlePasswordChanged = e => {
        this.props.passwordChanged(e.target.value);
        // this.setState({password: e.target.value})
    };
    handleLogin = () => {
        const { username, password } = this.props.login;
        // const { username, password } = this.state;
        this.props.loginUser({ username, password });
    };

    componentDidMount() {
        this.props.signOutUser();
    }

    render() {
        if ( this.props.login.successLogin) {
            return <Redirect to='/' />;
        }
        return (
            <div className='background'>
                <Container>
                    <Grid centered>
                        <Grid.Column mobile={16} tablet={8} computer={6}>
                            <Header as='h4' textAlign='center'>
                                Log-in to your account
                            </Header>
                            <Form className='input-custom'>
                                <Form.Input className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='Username'
                                    onChange={this.handleUsernameChanged}
                                    value={this.props.login.username}
                                    name="username"
                                />
                                <Form.Input className='input-custom'
                                    className='input-custom'
                                    fluid
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handlePasswordChanged}
                                    value={this.props.login.password}
                                    name="password"
                                />
                                <Button
                                    color='white'
                                    fluid size='large'
                                    onClick={this.handleLogin}
                                    loading={this.props.loading}
                                >Login</Button>
                                {this.props.error && <div>{this.props.error}</div>}
                            </Form>
                            <Message>
                                <h3>Not registered?</h3> <Link to="/register"> Sign up </Link>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps, {
    usernameChanged, passwordChanged, signOutUser, loginUser
})(Login);
