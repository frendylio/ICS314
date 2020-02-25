import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleSection from '../components/MiddleSection';
import FooterMenu from '../components/FooterMenu';

export default class wechat extends React.Component {

  render() {
    return (
        <div className={'background'}>
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