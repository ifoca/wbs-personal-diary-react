import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { useEffect, useState } from 'react';
import { getLocalStorage, addToLocalStorage } from './utils/shared';

function App() {
  const [diaryEntries, setDiaryEntries] = useState(getLocalStorage());

  const sortLocalStorage = async () => {
    diaryEntries.sort((a, b) => b.date.localeCompare(a.date));
  };

  useEffect(() => {
    sortLocalStorage();
  }, [diaryEntries]);

  const addToDiary = (item) => {
    addToLocalStorage(item);
    setDiaryEntries((prev) => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar addToDiary={addToDiary} diaryEntries={diaryEntries} />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home diaryEntries={diaryEntries} addToDiary={addToDiary} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
To do: 

    Homepage List:
    - Display diary entries sorted newest-first.
    Load Entries on Startup	:
    - Read and render stored entries when the app first mounts.

*/
