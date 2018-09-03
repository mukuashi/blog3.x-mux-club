import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import BasicLayout from './BasicLayout';
import routerConfig from '@/config/router.config';

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
      const children = formatter(item.routes, `${parentPath}${item.path}/`, locale);
      // Reduce memory usage
      result.children = children;
    }
    delete result.routes;
    return result;
  });
}
// get meun map data
const MenuData = formatter(routerConfig[0].routes);

class LoadingPage extends PureComponent {
  state = {
    loading: true,
    isMobile: false,
  };

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
    this.hideLoading();
  }
  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }
  hideLoading() {
    this.setState({
      loading: false,
    });
  }
  render() {
    const { loading, isMobile } = this.state;
    if (loading) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            margin: 'auto',
            paddingTop: 50,
            textAlign: 'center',
          }}
        >
          <Spin size="large" />
        </div>
      );
    }
    return (
      <BasicLayout
        isMobile={isMobile}
        menuData={MenuData}
        routerData={routerConfig}
        redirectData={[]}
        {...this.props}
      />
    );
  }
}

export default LoadingPage;
