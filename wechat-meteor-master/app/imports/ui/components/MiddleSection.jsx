import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';


export default class MiddleSection extends React.Component {
  render() {
    return (
        <Container>
          <Grid columns={2} divided={false}>
            <Grid.Row stretched>
              <Grid.Column>
                <Image src="/images/phone.png" size={'medium'}/>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row>
                  <Image src="/images/WeChatLogo.png" size={'centered tiny'}/>
                  <Image src="/images/Text.png" size={'centered huge'}/>
                  <Grid columns={2} divided={false}>
                    <Grid.Row stretched>
                      <Grid.Column>
                        <Image src="/images/Apple.png" size={'centered small'}/>
                      </Grid.Column>
                      <Grid.Column>
                        <Image src="/images/android.png" size={'centered small'}/>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Grid columns={3} divided={false}>
                    <Grid.Row stretched>
                      <Grid.Column>
                        <Image src="/images/windows.png" size={'centered '}/>
                      </Grid.Column>
                      <Grid.Column>
                        <Image src="/images/OS.png" size={'centered '}/>
                      </Grid.Column>
                      <Grid.Column>
                        <Image src="/images/www.png" size={'centered '}/>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </Container>

    );
  }
}
