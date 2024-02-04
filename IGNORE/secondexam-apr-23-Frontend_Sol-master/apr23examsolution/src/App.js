import './App.css';
import { SelectedBooks } from './context/SelectedBooks';
import PageRoutes from './routes/PageRoutes';
import { useState } from 'react';

function App() {

  const [selectedStudents, setSelectedStudents] = useState([]);

  return (
    <div className="App">

      <SelectedBooks.Provider value={{ selectedStudents, setSelectedStudents }}>
        <PageRoutes />
      </SelectedBooks.Provider>
    </div>
  );
}

export default App;
