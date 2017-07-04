import React from 'react';
import { Route } from 'react-router';
//import { List, Item } from './components';
import Root from './root';

// 无状态（stateless）组件，一个简单的容器，react-router 会根据 route
// 规则匹配到的组件作为 `props.children` 传入
const Container = (props) => {
  return (
    <div>{props.children}</div>
  );
};

// route 规则：
// - `/list` 显示 `List` 组件
// - `/item/:id` 显示 `Item` 组件
const routes = () => (
  <Router>
    <Route path="/" component={Root} />
  </Router>  
);

export default routes;