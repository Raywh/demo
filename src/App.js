import logo from './logo.svg';
import './App.css';
import PackageList from './component/sally'
import Picture from './component/Picture'
import DateApp from './component/example'
import { Button } from 'antd';

import TodoList from './component/todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 2
        </a>
      </header>

      <PackageList />
      <Picture  />
      <DateApp />
      <Button type="primary">Button</Button>

      <TodoList />
    </div>
  );
}

export default App;
