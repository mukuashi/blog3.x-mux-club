/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-16 12:24:15
*/
import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import systemData from '@/locales/zh-CN';
import './index.scss';

const { footer } = systemData;

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  render() {
    const props = { ...this.props };
    return (
      <footer className="copyright">
        <Texty
          delay={5000}
          type="right"
          mode="smooth"
          component={TweenOne}
          componentProps={{
            animation: [
              { x: 130, type: 'set' },
              { x: 100, delay: 500, duration: 450 },
              {
                ease: 'easeOutQuart',
                duration: 4000,
                x: 0,
              },
              {
                letterSpacing: 0,
                delay: -300,
                scale: 0.9,
                ease: 'easeInOutQuint',
                duration: 5000,
              },
              { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
            ],
          }}
        >
          {footer.copyright.number + 'All Rights Reserved.'}
        </Texty>
        版本v
        <em className="version">0.0</em>
        Copyright © 2015-
        <em className="date">2015</em>
        <em>mukuashi, Inc.</em>
        <Texty delay={5000} type="swing" mode="smooth" className="texty-inline">
          Referenced By
        </Texty>
        <Link to="//reactjs.org" target="_blank">
          Facebook React
        </Link>
        <Texty delay={5000} type="scaleBig" mode="reverse" className="texty-inline">
          | Powered By
        </Texty>
        <Link to="//photoartlife.lofter.com" target="_blank">
          MUX Studio
        </Link>
      </footer>
    );
  }
}
