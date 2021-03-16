import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Profile from './Profile'
import Home from './Home'
import MissingPage from './MissingPage'

class NavigationBar extends React.Component {

    state = {
        visible: false
    }

    changeVisibility = () => {
        console.log("am i coming here?")
        this.setState({ visible: !this.state.visible })
    }

    closeMenu = () => {
        this.setState({ visible: false })
    }

    render() {

        return (
            <>
                <div className="ui menu top attached inverted">
                    <a className="item" onClick={this.changeVisibility}>Menu</a>
                </div>
                <BrowserRouter>
                    <Sidebar.Pushable style={{ height: '100vh' }}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            onHide={() => this.setState({ visible: false })}
                            vertical
                            visible={this.state.visible}
                            width='thin'

                        >
                            <Menu.Item as={Link} to="/" onClick={this.closeMenu}>
                                <Icon name='home' />
          Home
        </Menu.Item >
                            <Menu.Item as={Link} to="/profile" onClick={this.closeMenu}>
                                <Icon name='gamepad' />
          Games
        </Menu.Item >
                            <Menu.Item as={Link} to="/camera" onClick={this.closeMenu}>
                                <Icon name='camera' />
          Channels
        </Menu.Item >
                        </Sidebar>
                        <Sidebar.Pusher dimmed={this.state.visible}>
                            <Segment basic >
                                <Switch>
                                    <Route component={Home} exact path="/"></Route>
                                    <Route component={Profile} exact path="/profile"></Route>
                                    <Route component={MissingPage} />
                                </Switch>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </BrowserRouter>
            </>
        );

    }

}

export default NavigationBar