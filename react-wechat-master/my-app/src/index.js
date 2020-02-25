import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Menu, Icon, Container, Image } from 'semantic-ui-react';
import phone from './images/phone.png';
import WeChat from './images/WeChatLogo.png';
import Text from './images/Text.png';
import apple from './images/Apple.png';
import android from './images/android.png';
import windows from './images/windows.png';
import www from './images/www.png';
import os from './images/OS.png';



class TopMenu extends React.Component {
  render() {
    return (
        <Menu text>
        </Menu>
    )
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <Container>
         <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Image src={phone} size={'medium'}/>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Image src={WeChat} size={'centered tiny'}/>
                <Image src={Text} size={'centered huge'}/>
                <Grid columns={2} divided>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <Image src={apple} size={'centered small'}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={android} size={'centered small'}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid columns={3} divided>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <Image src={windows} size={'centered '}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={os} size={'centered '}/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={www} size={'centered '}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        </Container>

    )
  }
}

class FooterMenu extends React.Component {
  render(){
    return (
        <Container>
          <Grid columns={8} divided>
            <Grid.Row>
              <Grid.Column>
                <a className={'white'}>
                  Help Center
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  About
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  Platform
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  English
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  Copyright © 1998-2019 Tencent Inc. All Rights Reserved.
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  Terms of Service
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  | Privacy Policy
                </a>
              </Grid.Column>
              <Grid.Column>
                <a className={'white'}>
                  | Acceptable Use Policy
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div className={"background"}>
          <TopMenu/>
          <TopMenu/>
          <TopMenu/>
          <TopMenu/>
          <MiddleSection/>
          <TopMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));