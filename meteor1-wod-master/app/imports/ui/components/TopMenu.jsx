import React from 'react';
import { Menu, Grid, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Grid container centered>
            <Menu.Item>HOME PAGE</Menu.Item>
            <Menu.Item>ABOUT US</Menu.Item>
            <Menu.Item>WINE CLUB</Menu.Item>
            <Image size="tiny" src="http://courses.ics.hawaii.edu/ics314f19/morea/ui-frameworks/wod-dvine-logo.png"/>
            <Menu.Item>D&apos;DVINE EVENTS</Menu.Item>
            <Menu.Item>CONTACT US</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
