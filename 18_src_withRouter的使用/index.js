import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// 刷新后对路由state参数的影响
// 						(1).BrowserRouter没有任何影响，因为state保存在history对象中。
// 						(2).HashRouter刷新后会导致路由state参数的丢失！！！
// 备注：HashRouter可以用于解决一些路径错误相关的问题。