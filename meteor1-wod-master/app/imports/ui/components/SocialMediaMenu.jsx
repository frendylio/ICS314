import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class SocialMediaMenu extends React.Component {
  render() {
    const itemStyle = { color: 'white' };
    return (
        <div className='orchid-background-color'>
          <Menu borderless icon size='mini' className="socialmedia">
            <Container>
              <Menu.Item style={itemStyle}><Icon size="large" inverted name="phone"/>808.862.3996</Menu.Item>
              <Menu.Item style={itemStyle}><Icon size="large" inverted name="envelope"/>info@dvinekailua.com</Menu.Item>
              <Menu.Item><Icon size="large" inverted name="facebook f"/></Menu.Item>
              <Menu.Item><Icon size="large" inverted name="instagram"/></Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}
