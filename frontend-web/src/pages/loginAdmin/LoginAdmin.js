import React, { Component } from 'react';
import {Grid, Form, Header, Button, Message, Container} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUserAdmin } from '../../actions/LoginActions';
import '../login/Login.css';

class LoginAdmin extends Component {

    handleUsernameChanged = e => {
        this.props.usernameChanged(e.target.value);
    };
    handlePasswordChanged = e => {
        this.props.passwordChanged(e.target.value);
    };
    handleLogin = () => {
        const { username, password } = this.props;
        this.props.loginUserAdmin({ username, password });
    };

    render() {
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
                                    value={this.props.username}
                                    name="username"
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
                                <Button
                                    color='white'
                                    fluid size='large'
                                    onClick={this.handleLogin}
                                    loading={this.props.loading}
                                >Login</Button>
                                {this.props.error && <div>{this.props.error}</div>}
                            </Form>
                            <Message>
                                <h3>This is login page for admin team!</h3>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ login, user }) => {
    const { username, password, error, successLogin, loading} = login;
    const { role } = user;
    return { username, password, error, successLogin, loading, role};
};

export default connect(mapStateToProps, {
    usernameChanged, passwordChanged, loginUserAdmin
})(LoginAdmin);
