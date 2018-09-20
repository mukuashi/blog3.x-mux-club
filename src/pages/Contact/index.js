/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 首页 - Home Component，Canvas + Animate
 * @Author: mukuashi@PhotoArtLife | mukuashi@icloud.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @version 0.2 | 2018-09-01 // update svg logo.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-21 01:19:50
*/
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import fireworks from '@/utils/fireworks';
import * as animate from '@/utils/animate';
import systemData from '@/locales/zh-CN';
import './index.scss';

const { footer } = systemData;

class ContactComponent extends PureComponent {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  getEnter = e => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: 'set',
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0,
            scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  };

  render() {
    const { language } = this.props;
    return <article className="contact">开发中。。。</article>;
  }
}

export default connect(({ global }) => ({ global }))(ContactComponent);
