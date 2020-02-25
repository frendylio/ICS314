import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
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
    );
  }
}
