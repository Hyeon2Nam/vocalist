import React, { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import TitleBar from './pages/TitleBar';
import LibraryPage from './pages/LibraryPage';
import StudyPage from './pages/StudyPage';
import InputPage from './pages/InputPage';

const App = () => {
  return (
    <div className="App">
      <div>
        <TitleBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="study" element={<StudyPage />} />
          <Route path="input" element={<InputPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
