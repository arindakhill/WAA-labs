import logo from "./logo.svg";
import Dashboard from "./Dashboard";
import { PostContext } from "./PostContext";

import "./App.css";
import { useState } from "react";

function App() {
  const[selectedPostId, setSelectedPost] = useState(null);

  return (
    <PostContext.Provider value={{selectedPostId,selectedPostId}}> 
      <div className="container">
        <header className="App-header">
          <h1>Posts Dashboard</h1>
        </header>
        <Dashboard />
      </div>
   
    </PostContext.Provider>
  );

};

export default App;
