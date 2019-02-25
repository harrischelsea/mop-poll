import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const userRouter = [
    { name: "View all", link: "/" },
    { name: "Log out", link: "/login" }
];

const adminRouter = [
    { name: "View all", link: "/admin/main" },
    { name: "Create", link: "/admin/create" },
    { name: "Log out", link: "/login" }
];

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            adminRouter: adminRouter,
            userRouter: userRouter
        }
    }

    render() {
        const { adminRouter, userRouter } = this.state;
        const { role } = this.props;
        return (
                <Segment className='header'>
                    <Container>
                        <span>Welcome! | MOP - Questionnaire</span>
                        {
                            role === "user"
                            ?
                            userRouter.map((el, i) => <Link key={i} className='link' to={el.link}>{el.name}</Link>)
                            :
                            adminRouter.map((el, i) => <Link key={i} className='link' to={el.link}>{el.name}</Link>)
                        }

                    </Container>
                </Segment>
        );
    }
}

export default Menu