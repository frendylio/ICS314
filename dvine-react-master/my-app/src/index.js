import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Grid, Icon, Image } from 'semantic-ui-react';
// import dvineglass from './images/wod-dvine-glasses.png';
import dvinelogo from './images/wod-dvine-logo.png';

class TopMenu extends React.Component {
  render() {
    return (
        <div className="orchid-background-color">
          <Menu borderless icon size='mini' className="orchid-background-color">
            <Container>
              <Menu.Item >
                <a className={'white'}>
                  <Icon name="large inverted phone icon" />
                  808.762.3996
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={'white'}>
                  <Icon name="large inverted envelope icon" />
                  info@dvinekailua.com
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={'white'}>
                  <Icon name="large inverted facebook f icon" />
                </a>
              </Menu.Item>
              <Menu.Item>
                <a className={'white'}>
                  <Icon name="large inverted instagram icon" />
                </a>
              </Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <Menu className="topmenu borderless">
          <Grid container centered>
            <Menu.Item>
              <a className={'black'}>
                HOME PAGE
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={'black'}>
                ABOUT US
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={'black'}>
                WINE CLUB
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={'black'}>
                <Image src={dvinelogo} size={'tiny'}/>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={'black'}>
                HOME PAGE
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className={'black'}>
                HOME PAGE
              </a>
            </Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FooterMenu extends React.Component {
  render(){
    return (
        <Menu className={"wine-background"}>
          <img className="ui centered medium image" src={dvinelogo}/>
        </Menu>
    )
  }
}

class Dvine extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleSection/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Dvine/>, document.getElementById('root'));