/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Common Header
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2017-03-26 12:25:27
 * @version 0.1 | 2017-03-26 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-17 01:46:38
*/
import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import systemData from '@/locales/zh-CN';
import styles from './index.scss';

const { header, footer } = systemData;

class GlobalHeader extends PureComponent {
  static defaultProps = {
    className: 'header',
  };
  handleChangeLanguage = () => {
    const { dispatch, language } = this.props;
    dispatch({
      type: 'global/update',
      payload: {
        language: !language,
      },
    });
  };

  render() {
    const { language } = this.props;
    return (
      <header className={styles.header}>
        <Button ghost size="small" type="primary" onClick={this.handleChangeLanguage}>
          {language ? '中文' : 'English'}
        </Button>
      </header>
    );
  }
}

export default connect(({ global }) => ({
  language: global.language,
}))(GlobalHeader);
