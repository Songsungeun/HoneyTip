import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './assets/global.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      {/* <Navbar></Navbar> */}
      <Card></Card>
    </div>
  );
};

export default App;
