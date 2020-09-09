import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
// import TreeNode from './components/treeNode/index'
import Menubar from './components/menubar/index'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">新增功能菜单</Button>
        <Menubar/>
      </header>
    </div>
  );
}

export default App;
