// App.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PostList from './PostList';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Sidebar />
        <div>
          <PostList />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
