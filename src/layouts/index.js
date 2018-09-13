/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Basic Layout Design => common header + common footer + content
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-23 12:25:27
 * @version 0.1 | 2018-03-23 // Initial version.
 * @version 0.2 | 2018-04-11 // fix chrome切换到移动端报错未销毁事件bug.
 * @version 0.3 | 2018-09-02 // update staging into umi.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-13 12:03:15
*/
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import classNames from 'classnames';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import pathToRegexp from 'path-to-regexp';
import { getScrollTop } from '@/utils';
import systemData from '@/locales/zh-CN';
import Context from './MenuContext';
import styles from './index.scss';

const { title, prefix } = systemData;

const cx = classNames.bind(styles);
const { Content, Header, Footer } = Layout;

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
    maxWidth: 1390,
  },
  'screen-xxl': {
    minWidth: 1391,
  },
};

// Conversion router to menu.
function formatter(data, parentPath = '') {
  return data.map(item => {
    let locale = '';
    if (item.name) {
      locale = `${item.name}`;
    }
    const result = {
      ...item,
      locale,
    };
    if (item.routes) {
      const children = formatter(item.routes, `${parentPath}${item.path}/`);
      // Reduce memory usage
      result.children = children;
    }
    delete result.routes;
    return result;
  });
}

class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.getPageTitle = memoizeOne(this.getPageTitle);
    this.getBreadcrumbNameMap = memoizeOne(this.getBreadcrumbNameMap, isEqual);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    this.state = {
      rendering: true,
    };
  }

  componentDidMount() {
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
    this.enquireHandler = enquireScreen(mobile => {
      const { ismobile, dispatch } = this.props;
      if (ismobile !== mobile) {
        dispatch({
          type: 'global/update',
          payload: {
            ismobile: mobile || false,
          },
        });
      }
    });
  }

  componentDidUpdate() {
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
    // 移动端uncheck
    unenquireScreen(this.enquireHandler);
  }

  getContext() {
    const { location } = this.props;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap,
    };
  }

  getMenuData() {
    const {
      route: { routes },
    } = this.props;
    return formatter(routes);
  }

  /**
   * 获取面包屑映射
   * @param {Object} menuData 菜单配置
   */
  getBreadcrumbNameMap() {
    const routerMap = {};
    const mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        }
        // Reduce memory usage
        routerMap[menuItem.path] = menuItem;
      });
    };
    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  getPageTitle = pathname => {
    let currRouterData = null;
    // match params path
    Object.keys(this.breadcrumbNameMap).forEach(key => {
      if (pathToRegexp(key).test(pathname)) {
        currRouterData = this.breadcrumbNameMap[key];
      }
    });
    const message = currRouterData && (currRouterData.locale || currRouterData.name);
    if (!message) {
      return title;
    }
    return `${message} - ${title}`;
  };

  getBashRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);
    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      return '/';
    }
    return redirect;
  };

  //
  render() {
    const { rendering } = this.state;
    const {
      ismobile,
      children,
      location: { pathname },
    } = this.props;

    const classLayoutContainer = cx({
      [`${prefix}-layout`]: true,
    });
    const classLayoutHeader = cx({
      [`${prefix}-layout-header`]: true,
    });
    const classLayoutContent = cx({
      [`${prefix}-layout-content`]: true,
    });
    const classLayoutFooter = cx({
      [`${prefix}-layout-footer`]: true,
    });

    const layout = (
      <Layout className={classLayoutContainer}>
        <Header className={classLayoutHeader} />
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
      </React.Fragment>
    );
  }
}

export default connect(({ global }) => ({
  ismobile: global.ismobile,
}))(BasicLayout);
