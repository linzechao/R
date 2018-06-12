# yarn
react/react-router-dom/redux

## step
1. webpack/webpack-cli/webpack-dev-server
2. react/react-dom
3. babel
4. style-loader/css-loader
5. mock/webpack-api-mocker
6. react-router-dom
7. less-loader
8. sass-loader
9. eslint-loader
9. redux

### Q&A
1. mock 没有自带服务器功能
2. 合并 setState
3. 不支持 <></>
4. 路由不能嵌套
  * 路由(组件)都是 Function
  * 404 时使用 Switch 组件，即是模糊匹配
5. 非 “/” 路由时，刷新页面报错
6. redux 中 reducer dispatch 修改了其他的值
  * reducer 默认情况下必须原封不动地返回 state

# dva
1. eslint 没启动
  ```bash
  yarn lint
  ```
2. 非首页刷新报错
  * 在 <code>./public/index.html</code> 中引入的 JS 前面加上 /，如下：
  ```js
  <script src="/index.js"></script>
  ```
