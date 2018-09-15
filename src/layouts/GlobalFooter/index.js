/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-15 21:39:23
*/
import React, { PureComponent } from 'react';
import Link from 'umi/link';
import Texty from 'rc-texty';
import systemData from '@/locales/zh-CN';
import './index.scss';

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  render() {
    const props = { ...this.props };
    return (
      <footer className="copyright">
        v<span className="version">0.0</span> © 2015 - <span className="date">2015</span>{' '}
        <a href="http://juliangarnier.com" target="_blank">
          Julian Garnier
        </a>
      </footer>
    );
  }
}
