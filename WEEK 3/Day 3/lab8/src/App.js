
import Dashboard from "./Dashboard";

import "./App.css";
import { PostProvider } from "./PostContext";

function App() {
  return (
    <PostProvider>
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Posts Dashboard</h1>
        </header>
        <Dashboard />
      </div>
    </div>
    </PostProvider>
  );

}

export default App;
