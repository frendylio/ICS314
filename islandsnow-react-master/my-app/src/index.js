import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, MenuItem, Dropdown, DropdownMenu, Icon, Image, Grid, GridColumn, GridRow, Input, List, ListItem, Divider } from 'semantic-ui-react';
import logo from './images/logo.png';
import background from './images/islandSlowBackgorund.jpg';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu color">
          <Container>
            <Menu.Item as='a' fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item as='a' fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item as='a' fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item as='a' fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item as='a' fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item as='a' fitted><Icon name="search" /></Menu.Item>
            <Menu.Item as='a' fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src={logo}/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu center aligned borderless secondary>
          <Container className="ui centered grid">
            <Dropdown item text='MEN'>
            </Dropdown>

            <Dropdown item text='WOMEN'>
            </Dropdown>

            <Dropdown item text='KIDS'>
            </Dropdown>

            <Dropdown item text='BRANDS'>
            </Dropdown>

            <Menu.Item as='a' name='SEARCH'>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src={background}/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="grey-background">
          <Container>
            <Grid>
              <GridRow columns={3}>
                <GridColumn>
                  <div>NAVIGATION</div>
                  <Divider/>
                  <List>
                    <List.Item>
                      <a className="white">About us</a>
                    </List.Item>
                    <List.Item>
                      <a className="white">Videos</a>
                    </List.Item>
                    <List.Item>
                      <a className="white">Store locations</a>
                    </List.Item>
                  </List>
                </GridColumn>

                <GridColumn>
                  <div>MAIN MENU</div>
                  <Divider/>
                  <List>
                    <List.Item>
                      <a className="white">Men</a>
                    </List.Item>
                    <List.Item>
                      <a className="white">Women</a>
                    </List.Item>
                    <List.Item>
                      <a className="white">Kids</a>
                    </List.Item>
                  </List>
                </GridColumn>

                <GridColumn>
                  <div>CONNECT</div>
                  <Divider/>
                  <div>Sign up for the latest updates</div>
                  <Input
                      action={{ color: 'black', content: 'Join' }}
                      placeholder='Enter email address'
                  />
                </GridColumn>
              </GridRow>
            </Grid>
          </Container>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));