/*
 * Copyright (c) 2018-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | Basic Layout Design => common header + common footer + content
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-06-16 12:25:27
 * @version 0.1 | 2018-06-16 // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-08-19 18:35:03
*/
import { Layout, Menu } from "antd";
import Link from 'umi/link';
import classNames from 'classnames';
import styles from './index.scss';

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;
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

const App = props => {
  return (
    <Layout className={classLayoutContainer}>
      <Header className={classLayoutHeader}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/content">多路由</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/example">其他</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className={classLayoutContent}>
        {props.children}
      </Content>
      <Footer className={classLayoutFooter}>
        Ant Design ©2016 Created by Ant UED
        </Footer>
    </Layout>

  );
};

export default App;
