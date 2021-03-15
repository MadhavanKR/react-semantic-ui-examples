import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import * as reactfa from 'react-icons/fa'

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
                <Sidebar.Pushable style={{height: '100vh'}}>
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
                        <Menu.Item as='a'>
                            <Icon name='home' />
          Home
        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
          Games
        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
          Channels
        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={this.state.visible}>
                        <Segment basic >
                            <Header as='h3'>Application Content</Header>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </>
        );

    }

}

export default NavigationBar