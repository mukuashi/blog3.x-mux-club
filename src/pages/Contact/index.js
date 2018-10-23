/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | 联系页 - Contact Me
 * @Author: mukuashi@PhotoArtLife | mukuashi@icloud.com
 * @Date: 2016-01-18 17:19:07
 * @version 0.1 | 2017-02-28 // Initial version.
 * @version 0.2 | 2018-09-01 // update svg logo.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-10-24 01:23:05
*/
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import contact from './components/contact';
import systemData from '@/locales/zh-CN';
import './index.scss';

class ContactComponent extends PureComponent {
  state = {};

  componentDidMount() {
    let element = document.querySelector('.messages');
    contact(element);
  }

  componentWillUnmount() {}

  render() {
    const { language } = this.props;
    return <article className="messages" />;
  }
}

export default connect(({ global }) => ({ global }))(ContactComponent);
