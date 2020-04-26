/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Footer
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2020-04-26 15:59:23
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import Texty from 'rc-texty';
import systemData from '@/locales/zh-CN';
import './index.scss';

const { footer } = systemData;

class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  render() {
    const { language } = this.props.global;
    return (
      <footer className="copyright">
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.beian.miit.gov.cn"
          >{`${footer.copyright.icp} `}</a>
          All Rights Reserved
        </p>
        <Texty delay={5000} type="scaleBig" mode="reverse" className="texty-inline">
          ©Powered By
        </Texty>
        <a className="team" href="/1.x/contact">
          Asako Studio
        </a>
        <Texty delay={5000} type="scaleBig" mode="reverse" className="texty-inline">
          · Code Hosted on
        </Texty>
        <Link
          to="//github.com/PhotoArtLife/blog3.x-mux-club"
          className="code"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Github
        </Link>
        <br />
        {language ? 'Version ' : '版本'}
        <em className="version">0.0</em>
        Copyright © 2015 -<em className="date">0</em>
        <em>mukuashi Inc.</em>
        <Texty delay={5000} type="swing" mode="smooth" className="texty-inline">
          Referenced By
        </Texty>
        <Link to="//reactjs.org" target="_blank" rel="noopener noreferrer nofollow">
          Facebook React
        </Link>
      </footer>
    );
  }
}

export default connect(({ global }) => ({ global }))(GlobalFooter);
