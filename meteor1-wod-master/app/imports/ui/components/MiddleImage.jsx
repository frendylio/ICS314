import React from 'react';
import { Image } from 'semantic-ui-react';
// import logo from 'http://courses.ics.hawaii.edu/ics314f19/morea/ui-frameworks/wod-dvine-logo.png';

export default class MiddleImage extends React.Component {
  render() {
    return (
        <div className="wine-background">
          <Image centered size="medium"
                 src="http://courses.ics.hawaii.edu/ics314f19/morea/ui-frameworks/wod-dvine-logo.png"/>
        </div>
    );
  }
}
