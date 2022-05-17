import React from 'react';
import ReactDOM from 'react-dom';
import BtnToggle from './component/BtnToggle';
import Content from './component/Content';
import ThemeContextProvider from './component/ThemeContext';

const App = () => {
  return (
    <div>
    <ThemeContextProvider>
      <BtnToggle />
      <Content />
    </ThemeContextProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));