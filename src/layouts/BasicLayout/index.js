/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Basic Layout Design => common header + common footer + content
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-06-16 12:25:27
 * @version 0.1 | 2018-06-16 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-08-25 17:10:11
*/
import React from 'react';
import { Layout, Menu } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import memoizeOne from 'memoize-one';
import { connect } from 'dva';
import deepEqual from 'lodash.isequal';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import pathToRegexp from 'path-to-regexp';
import classNames from 'classnames';
import Context from '../MenuContext';
import systemData from 'config/system';
import styles from './index.scss';

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 */
const getBreadcrumbNameMap = memoizeOne(meun => {
  const routerMap = {};
  const mergeMeunAndRouter = meunData => {
    meunData.forEach(meunItem => {
      if (meunItem.children) {
        mergeMeunAndRouter(meunItem.children);
      }
      // Reduce memory usage
      routerMap[meunItem.path] = meunItem;
    });
  };
  mergeMeunAndRouter(meun);
  return routerMap;
}, deepEqual);

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};
const classLayoutContainer = cx({
  'mux-layout': true,
});
const classLayoutHeader = cx({
  'mux-layout-header': true,
});
const classLayoutContent = cx({
  'mux-layout-content': true,
});
const classLayoutFooter = cx({
  'mux-layout-footer': true,
});

class BasicLayout extends React.PureComponent {
  state = {
    rendering: true,
  };
  constructor(props) {
    super(props);
    const { menuData } = this.props;
    this.getPageTitle = memoizeOne(this.getPageTitle);
    this.breadcrumbNameMap = getBreadcrumbNameMap(menuData);
  }
  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }
  getPageTitle = pathname => {
    let currRouterData = null;
    const { title } = systemData;
    // match params path
    Object.keys(this.breadcrumbNameMap).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = this.breadcrumbNameMap[key];
      }
    });
    if (!currRouterData) {
      return title;
    }
    const message = formatMessage({
      id: currRouterData.locale || currRouterData.name,
      defaultMessage: currRouterData.name,
    });
    return `${message} - ${title}`;
  };
  componentDidMount() {
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
  }
  render() {
    const {
      isMobile,
      children,
      location: { pathname },
    } = this.props;
    const layout = (
      <Layout className={classLayoutContainer}>
        <Header className={classLayoutHeader}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/home">其他</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={classLayoutContent}>{children}</Content>
        <Footer className={classLayoutFooter}>Ant Design ©2016 Created by Ant UED</Footer>
      </Layout>
    );
    return (
      <React.Fragment>
        <DocumentTitle title={this.getPageTitle(pathname)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
        {this.state.rendering ? null : 'loading . . .'}
      </React.Fragment>
    );
  }
}

export default connect(() => ({}))(BasicLayout);
